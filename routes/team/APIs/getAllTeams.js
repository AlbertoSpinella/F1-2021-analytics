const getAllTeamsController = async () => {
    const query = `
        MATCH (t:Team)
        RETURN t
    `;
    const queryResult = await graph.query(query);

    const teams = [];

    queryResult._results.forEach(team => {
        teams.push(team._values[0]?.properties);
    });
    return teams;
};

export const getAllTeamsService = async (req, res) => {
    const result = await getAllTeamsController();
    return res.send(result);
};