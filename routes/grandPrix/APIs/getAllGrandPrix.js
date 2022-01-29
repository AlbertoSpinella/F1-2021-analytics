const getAllGrandPrixController = async () => {
    const query = `
        MATCH (g:GrandPrix)
        RETURN g
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const allGrandPrix = [];

    queryResult._results[0]?._values.forEach(gp => {
        allGrandPrix.push(gp.properties);
    });
    return allGrandPrix;
};

export const getAllGrandPrixService = async (req, res) => {
    const result = await getAllGrandPrixController();
    return res.send(result);
};