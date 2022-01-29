const deleteTeamController = async (teamID) => {
    const query = `
        MATCH (t:Team {id: '${teamID}'})
        DETACH DELETE t
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);
    return { message:  "deleted" };
};

export const deleteTeamService = async (req, res) => {
    const { params: { teamID } } = req;
    const result = await deleteTeamController(teamID);
    return res.send(result);
};