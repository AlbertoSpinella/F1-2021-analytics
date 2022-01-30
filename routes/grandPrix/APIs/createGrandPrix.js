import { HTTPerror } from "../../../libs/errors.js";

const createGrandPrixController = async (grandPrix) => {
    const date = new Date(grandPrix.date).getTime();
    if (isNaN(date)) throw new HTTPerror("Invalid date format", 400);
    const query = `
        MERGE (g:GrandPrix{id:'${grandPrix.city}',name:'${grandPrix.city}',completeName:'${grandPrix.name}',circuit:'${grandPrix.circuit}',nation:'${grandPrix.nation}',city:'${grandPrix.city}',date:${date}})
        RETURN g
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);
    const result = queryResult._results[0]._values[0].properties;
    result.date = new Date(parseInt(result.date));
    return result;
};

export const createGrandPrixService = async (req, res) => {
    const { body } = req;
    const result = await createGrandPrixController(body);
    return res.send(result);
};