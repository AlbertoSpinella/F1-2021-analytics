const positionsGainedOrLosedPerGPByDriverIDController = async (driverID) => {
    const query = `
        MATCH (d:Driver{id:'${driverID}'})-[r:RacedAt]->(g:GrandPrix)
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
    
    const result = queryResult._results[0];

    const driverData = result._values[0].properties;
    driverData.isFirstDriver = result._values[1];
    const performances = result._values[2];
    const performancesData = [];
    for (let i = 0; i < performances.length; i++) {
        const performanceData = {
            gp: result._values[3][i],
            date: new Date(result._values[4][i]),
            score: result._values[5][i]
        };
        performancesData.push(performanceData);
    }
    driverData.performances = performancesData;

    return driverData;
};

export const positionsGainedOrLosedPerGPByDriverIDService = async (req, res) => {
    const { params: { driverID } } = req;
    const result = await positionsGainedOrLosedPerGPByDriverIDController(driverID);
    return res.send(result);
};