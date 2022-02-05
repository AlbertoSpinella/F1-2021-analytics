const bestRacesByDriverIDController = async (driverID) => {
    const query = `
        MATCH (d1:Driver{id:'${driverID}'})-[r1:RacedAt]->(g1:GrandPrix)
        WITH d1.name as driverName, min(r1.position) as min
        MATCH (d2:Driver)-[r2:RacedAt]->(g2:GrandPrix)
        WHERE d2.name = driverName AND r2.position = min
        RETURN driverName, min(r2.position) as best, count(r2) as count, collect(r2) as races
        ORDER BY best, count DESC
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const result = queryResult._results[0];

    const driver = {
        driverName: result._values[0],
        best: result._values[1],
        count: result._values[2],
        races: result._values[3]
    }
    driver.races = driver.races.map(el => el.properties);

    return driver;
};

export const bestRacesByDriverIDService = async (req, res) => {
    const { params: { driverID } } = req;
    const result = await bestRacesByDriverIDController(driverID);
    return res.send(result);
};