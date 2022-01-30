const createRacedAtController = async (driverID, grandPrixID, body) => {
    const query = `
        MATCH
        (d:Driver {id:'${driverID}'}),(g:GrandPrix {id:'${grandPrixID}'})
        MERGE (d)-[r:RacedAt {id:'${driverID}-${grandPrixID}',position:${body.position},points:${body.points},fastestLap:'${body.fastestLap}',qualified:${body.qualified},pointsFromSprint:${body.pointsFromSprint}}]->(g)
        return d,r,g, d.isFirstDriver = 'true' as isFirstDriver, r.fastestLap = 'true' as fastestLap
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);
    const driver = queryResult._results[0]._values[0].properties;
    driver.isFirstDriver = queryResult._results[0]._values[3];
    const racedAt = queryResult._results[0]._values[1].properties;
    racedAt.fastestLap = queryResult._results[0]._values[4];
    const grandPrix = queryResult._results[0]._values[2].properties;
    const result = { driver, racedAt, grandPrix };
    return result;
};

export const createRacedAtService = async (req, res) => {
    const { params: { driverID, grandPrixID }, body } = req;
    const result = await createRacedAtController(driverID, grandPrixID, body);
    return res.send(result);
};