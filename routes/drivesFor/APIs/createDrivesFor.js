const createDrivesForController = async (driverID, teamID, since) => {
    const query = `
        MATCH
        (d:Driver {id:'${driverID}'}),(t:Team {id:'${teamID}'})
        MERGE (d)-[r:DrivesFor {id:'${driverID}-${teamID}',since:'${since}'}]->(t)
        return d,t
    `;
    const result = {};
    const queryResult = await graph.query(query);
    result.driver = queryResult._results[0]._values[0].properties;
    result.team = queryResult._results[0]._values[1].properties;
    return result;
};

export const createDrivesForService = async (req, res) => {
    const { params: { driverID, teamID }, body: { since } } = req;
    const result = await createDrivesForController(driverID, teamID, since);
    return res.send(result);
};