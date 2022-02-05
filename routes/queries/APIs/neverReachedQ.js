const neverReachedQController = async (Q) => {
    const pos = Q == "Q2" ? 15 : 10;
    const query = `
        MATCH (d:Driver)-[r:RacedAt]->(g:GrandPrix)
        WITH d.name as name, min(r.qualified) as bestQualified
        WHERE bestQualified > ${pos}
        RETURN name, bestQualified
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const drivers = [];

    queryResult._results.forEach(driver => {
        const result = {
            driver: driver._values[0],
            bestQualified: driver._values[1]
        }
        drivers.push(result);
    });

    return drivers;
};

export const neverReachedQService = async (req, res) => {
    const { params: { Q } } = req;
    const result = await neverReachedQController(Q);
    return res.send(result);
};