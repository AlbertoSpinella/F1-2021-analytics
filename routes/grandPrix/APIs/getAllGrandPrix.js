const getAllGrandPrixController = async () => {
    const query = `
        MATCH (g:GrandPrix)
        RETURN g
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const allGrandPrix = [];

    console.log("COME", queryResult._results[0]?._values);

    queryResult._results.forEach(gp => {
        allGrandPrix.push(gp._values[0].properties);
    });
    return allGrandPrix;
};

export const getAllGrandPrixService = async (req, res) => {
    const result = await getAllGrandPrixController();
    return res.send(result);
};