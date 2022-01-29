const createDriverController = async (driver) => {
    const query = `
        MERGE (d:Driver{id:'${driver.surname}',name:'${driver.name}',surname:'${driver.surname}',number:'${driver.number}',nationality:'${driver.nationality}',isFirstDriver:'${driver.isFirstDriver}',age:'${driver.age}',worldTitles:'${driver.worldTitles}'})
        RETURN d
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);
    return queryResult._results[0]._values[0].properties;
};

export const createDriverService = async (req, res) => {
    const { body } = req;
    const result = await createDriverController(body);
    return res.send(result);
};