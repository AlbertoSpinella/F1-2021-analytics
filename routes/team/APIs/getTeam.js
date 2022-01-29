import { HTTPerror } from "../../../libs/errors.js";

const getTeamController = async (teamID) => {
    const query = `
        MATCH (t:Team {id: '${teamID}'})
        RETURN t
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    if (queryResult._resultsCount == 0) throw new HTTPerror("Team not found", 400);

    const team = queryResult._results[0]._values[0]?.properties;
    return team;
};

export const getTeamService = async (req, res) => {
    const { params: { teamID } } = req;
    const result = await getTeamController(teamID);
    return res.send(result);
};