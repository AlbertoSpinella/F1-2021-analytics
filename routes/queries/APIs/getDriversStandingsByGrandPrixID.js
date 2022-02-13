const getDriversStandingsByGrandPrixIDController = async (grandPrixID) => {
    const query = `
        MATCH (g:GrandPrix{id:'${grandPrixID}'})
        WITH g as record
        MATCH (d:Driver)-[r:RacedAt]->(g:GrandPrix)
        WITH d.name as driverName, r, g
        WHERE g.date <= record.date
        RETURN driverName, sum(r.points + r.pointsFromSprint) as points
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

export const getDriversStandingsByGrandPrixIDService = async (req, res) => {
    const { params: { grandPrixID } } = req;
    const result = await getDriversStandingsByGrandPrixIDController(grandPrixID);
    return res.send(result);
};