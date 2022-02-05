const allDriversAtPointsController = async () => {
    const query = `
        MATCH (d1:Driver)-[r1:RacedAt]->(g1:GrandPrix)
        WITH d1.name as driverName, max(r1.position) as max
        MATCH (d2:Driver)-[r2:RacedAt]->(g2:GrandPrix)
        WHERE d2.name = driverName AND r2.position = max AND r2.position < 11
        RETURN DISTINCT driverName
    `;
    logRGQuery(query);
    
        const queryResult = await graph.query(query);

    const drivers = [];

    queryResult._results.forEach(driver => {
        drivers.push(driver._values[0]);
    });

    return drivers;
};

export const allDriversAtPointsService = async (req, res) => {
    const result = await allDriversAtPointsController();
    return res.send(result);
};