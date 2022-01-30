import { HTTPerror } from "../../../libs/errors.js";

const getGrandPrixController = async (grandPrixID) => {
    const query = `
        MATCH (g:GrandPrix {id: '${grandPrixID}'})<-[r:RacedAt]-(d:Driver)
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
    performances.sort((a, b) => {
        if (parseInt(a.position) > parseInt(b.position)) return 1;
        return -1;
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