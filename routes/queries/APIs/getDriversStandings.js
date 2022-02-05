const getDriversStandingsController = async () => {
    const query = `
        MATCH (d:Driver)-[r:RacedAt]->(g:GrandPrix)
        WITH d.name as driverName, collect(r) as races, sum(r.points + r.pointsFromSprint) as points
        RETURN driverName, points
        ORDER BY points DESC
    `;
    logRGQuery(query);

    const queryResult = await graph.query(query);

    const drivers = [];

    queryResult._results.forEach(result => {
        const driver = {
            name: result._values[0],
            points: result._values[1]
        }
        console.log(driver);
        drivers.push(driver);
    });

    return drivers;
};

export const getDriversStandingsService = async (req, res) => {
    const result = await getDriversStandingsController();
    return res.send(result);
};