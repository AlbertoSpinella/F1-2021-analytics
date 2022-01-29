import { HTTPerror } from "../../../libs/errors.js";

const getGrandPrixController = async (grandPrixID) => {
    const query = `
        MATCH (g:GrandPrix {id: '${grandPrixID}'})
        RETURN g
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    if (queryResult._resultsCount == 0) throw new HTTPerror("GrandPrix not found", 404);

    const grandPrix = queryResult._results[0]._values[0]?.properties;
    grandPrix.date = new Date(parseInt(grandPrix.date));
    console.log(grandPrix);
    return grandPrix;
};

export const getGrandPrixService = async (req, res) => {
    const { params: { grandPrixID } } = req;
    const result = await getGrandPrixController(grandPrixID);
    return res.send(result);
};