const qualifiedFirstController = async () => {
    const query = `
        MATCH (d:Driver)-[r:RacedAt]->(g:GrandPrix)
        WITH d.name as driverName, min(r.qualified) as qualified, g.name as GPName
        WHERE qualified = 1
        RETURN driverName, collect(GPName) as GPNames
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const results = [];

    queryResult._results.forEach(driver => {
        const result = {
            driverName: driver._values[0],
            GPs: driver._values[1]
        }
        results.push(result);
    });

    return results;
};

export const qualifiedFirstService = async (req, res) => {
    const result = await qualifiedFirstController();
    return res.send(result);
};