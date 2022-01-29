import { HTTPerror } from "../../../libs/errors.js";

const getDriverController = async (driverID) => {
    const query = `
        MATCH (d:Driver {id: '${driverID}'})
        RETURN d
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    if (queryResult._resultsCount == 0) throw new HTTPerror("Driver not found", 400);

    const driver = queryResult._results[0]._values[0]?.properties;
    return driver;
};

export const getDriverService = async (req, res) => {
    const { params: { driverID } } = req;
    const result = await getDriverController(driverID);
    return res.send(result);
};