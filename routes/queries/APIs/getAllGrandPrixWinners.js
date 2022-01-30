const getAllGrandPrixWinnersController = async () => {
    const query = `
        MATCH (d:Driver)-[r:RacedAt {position:'1'}]->(g:GrandPrix)
        RETURN d,r,g
        ORDER BY g.date
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const grandPrixWinners = [];
    queryResult._results.forEach(race => {
        const grandPrixWinner = {
            driver: race._values[0].properties.id,
            grandPrix: race._values[2].properties.id,
        };
        grandPrixWinners.push(grandPrixWinner);
    });

    return grandPrixWinners;
};

export const getAllGrandPrixWinnersService = async (req, res) => {
    const result = await getAllGrandPrixWinnersController();
    return res.send(result);
};