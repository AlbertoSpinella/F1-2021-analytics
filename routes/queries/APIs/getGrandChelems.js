const getAllGrandChelemsController = async () => {
    const query = `
        MATCH (d:Driver)-[r:RacedAt {position:'1',fastestLap:'true',qualified:'1'}]->(g:GrandPrix)
        RETURN d,r,g, d.isFirstDriver = 'true' as isFirstDriver, r.fastestLap = 'true' as fastestLap
        ORDER BY g.date
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const grandChelems = [];
    queryResult._results.forEach(race => {
        const driver = race._values[0].properties;
        driver.isFirstDriver = race._values[3];
        const racedAt = race._values[1].properties;
        racedAt.fastestLap = race._values[4];
        const grandPrix = race._values[2].properties;
        const grandChelem = { driver, racedAt, grandPrix };
        grandChelems.push(grandChelem);
    });

    return grandChelems;
};

export const getAllGrandChelemsService = async (req, res) => {
    const result = await getAllGrandChelemsController();
    return res.send(result);
};