const deleteGrandPrixController = async (grandPrixID) => {
    const query = `
        MATCH (g:GrandPrix {id: '${grandPrixID}'})
        DETACH DELETE g
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);
    return { message:  "deleted" };
};

export const deleteGrandPrixService = async (req, res) => {
    const { params: { grandPrixID } } = req;
    const result = await deleteGrandPrixController(grandPrixID);
    return res.send(result);
};