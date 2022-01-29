const getAllDriversController = async () => {
    const query = `
        MATCH (d:Driver)
        RETURN d
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const drivers = [];

    queryResult._results.forEach(driver => {
        drivers.push(driver._values[0]?.properties);
    });
    return drivers;
};

export const getAllDriversService = async (req, res) => {
    const result = await getAllDriversController();
    return res.send(result);
};