const createRacedAtController = async (driverID, grandPrixID, body) => {
    const query = `
        MATCH
        (d:Driver {id:'${driverID}'}),(g:GrandPrix {id:'${grandPrixID}'})
        MERGE (d)-[r:RacedAt {id:'${driverID}-${grandPrixID}',position:'${body.position}',points:'${body.points}',fastestLap:'${body.fastestLap}',qualified:'${body.qualified}',pointsFromSprint:'${body.pointsFromSprint}'}]->(g)
        return d,g
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);
    const result = {
        driver: queryResult._results[0]._values[0].properties,
        grandPrix: queryResult._results[0]._values[1].properties
    };
    return result;
};

export const createRacedAtService = async (req, res) => {
    const { params: { driverID, grandPrixID }, body } = req;
    const result = await createRacedAtController(driverID, grandPrixID, body);
    return res.send(result);
};