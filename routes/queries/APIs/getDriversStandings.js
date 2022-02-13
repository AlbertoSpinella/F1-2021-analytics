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
    let position = 1;

    queryResult._results.forEach(result => {
        const driver = {
            name: result._values[0],
            points: result._values[1],
            position
        }
        drivers.push(driver);
        position++;
    });

    return drivers;
};

export const getDriversStandingsService = async (req, res) => {
    const result = await getDriversStandingsController();
    return res.send(result);
};