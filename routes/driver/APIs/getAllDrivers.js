const getAllDriversController = async () => {
    const query = `
        MATCH (d:Driver)-[r:DrivesFor]->(t:Team)
        RETURN d,t
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const drivers = [];

    queryResult._results.forEach(driver => {
        const driverWithTeam = driver._values[0]?.properties;
        driverWithTeam.team = driver._values[1]?.properties;
        drivers.push(driverWithTeam);
    });
    return drivers;
};

export const getAllDriversService = async (req, res) => {
    const result = await getAllDriversController();
    return res.send(result);
};