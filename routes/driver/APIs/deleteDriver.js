const deleteDriverController = async (driverID) => {
    const query = `
        MATCH (d:Driver {id: '${driverID}'})
        DETACH DELETE d
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);
    return { message:  "deleted" };
};

export const deleteDriverService = async (req, res) => {
    const { params: { driverID } } = req;
    const result = await deleteDriverController(driverID);
    return res.send(result);
};