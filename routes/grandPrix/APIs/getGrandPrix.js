import { HTTPerror } from "../../../libs/errors.js";

const getGrandPrixController = async (grandPrixID) => {
    const query = `
        MATCH (g:GrandPrix {id: '${grandPrixID}'})<-[r:RacedAt]-(d:Driver)
        WITH r, g
        ORDER BY r.position
        RETURN g, collect(r) AS r
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    if (queryResult._resultsCount == 0) throw new HTTPerror("GrandPrix not found", 404);

    const grandPrix = queryResult._results[0]._values[0]?.properties;
    const performances = [];
    queryResult._results[0]._values[1].forEach(performance => {
        performances.push(performance.properties);
    });
    grandPrix.performances = performances;
    grandPrix.date = new Date(parseInt(grandPrix.date));
    return grandPrix;
};

export const getGrandPrixService = async (req, res) => {
    const { params: { grandPrixID } } = req;
    const result = await getGrandPrixController(grandPrixID);
    return res.send(result);
};