const getTeamsStandingsController = async () => {
    const query = `

    `;
    logRGQuery(query);

    const queryResult = await graph.query(query);

};

export const getTeamsStandingsService = async (req, res) => {
    const result = await getTeamsStandingsController();
    return res.send(result);
};