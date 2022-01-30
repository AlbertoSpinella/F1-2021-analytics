const getGrandChelemDriversController = async () => {
    const query = `
        MATCH (d:Driver)-[r:RacedAt {position:'1',fastestLap:'true',qualified:'1'}]->(g:GrandPrix)
        RETURN collect(d.id) as d
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const drivers = [... new Set(queryResult._results[0]._values[0])];
    return drivers;
};

export const getGrandChelemDriversService = async (req, res) => {
    const result = await getGrandChelemDriversController();
    return res.send(result);
};