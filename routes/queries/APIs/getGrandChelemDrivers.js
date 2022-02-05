const getGrandChelemDriversController = async () => {
    const query = `
        MATCH (d:Driver)-[r:RacedAt {position:1,fastestLap:'true',qualified:1}]->(g:GrandPrix)
        RETURN DISTINCT d.id
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const drivers = [];

    queryResult._results.forEach(driver => {
        drivers.push(driver._values[0]);
    });
    return drivers;
};

export const getGrandChelemDriversService = async (req, res) => {
    const result = await getGrandChelemDriversController();
    return res.send(result);
};