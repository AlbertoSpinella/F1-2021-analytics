const positionsGainedOrLosedPerGPController = async () => {
    const query = `
        MATCH (d:Driver)-[r:RacedAt]->(g:GrandPrix)
        WITH d, r, g
        ORDER BY g.date
        RETURN
        d,
        d.isFirstDriver = 'true' as isFirstDriver,
        collect(r) as performances,
        collect(g.id) as gpname,
        collect(g.date) as gpdate,
        collect(r.qualified - r.position) as score
        ORDER BY d.id
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const drivers = [];
    queryResult._results.forEach(driver => {
        const driverData = driver._values[0].properties;
        driverData.isFirstDriver = driver._values[1];
        const performances = driver._values[2];
        const performancesData = [];
        for (let i = 0; i < performances.length; i++) {
            const performanceData = {
                gp: driver._values[3][i],
                date: new Date(driver._values[4][i]),
                score: driver._values[5][i]
            };
            performancesData.push(performanceData);
        }
        driverData.performances = performancesData;
        drivers.push(driverData);
    });

    return drivers;
};

export const positionsGainedOrLosedPerGPService = async (req, res) => {
    const result = await positionsGainedOrLosedPerGPController();
    return res.send(result);
};