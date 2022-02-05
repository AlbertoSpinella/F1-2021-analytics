const getAllGrandPrixController = async () => {
    const query = `
        MATCH (g:GrandPrix)
        RETURN g
        ORDER BY g.date
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const allGrandPrix = [];

    queryResult._results.forEach(gp => {
        allGrandPrix.push(gp._values[0].properties);
    });
    return allGrandPrix;
};

export const getAllGrandPrixService = async (req, res) => {
    const result = await getAllGrandPrixController();
    return res.send(result);
};