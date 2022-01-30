const getAllFastestLapsController = async () => {
    const query = `
        MATCH (d:Driver)-[r:RacedAt {fastestLap:'true'}]->(g:GrandPrix)
        RETURN d,r,g, d.isFirstDriver = 'true' as isFirstDriver, r.fastestLap = 'true' as fastestLap
        ORDER BY g.date
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const fastestLaps = [];
    queryResult._results.forEach(race => {
        const racedAt = race._values[1].properties;
        racedAt.fastestLap = race._values[4];
        fastestLaps.push(racedAt);
    });

    return fastestLaps;
};

export const getAllFastestLapsService = async (req, res) => {
    const result = await getAllFastestLapsController();
    return res.send(result);
};