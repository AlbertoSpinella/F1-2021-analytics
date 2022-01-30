import { HTTPerror } from "../../../libs/errors.js";

const getTeamController = async (teamID) => {
    const query = `
        MATCH (t:Team {id: '${teamID}'})<-[r:DrivesFor]-(d:Driver)
        RETURN t,d, d.isFirstDriver = 'true' as isFirstDriver
        ORDER BY isFirstDriver DESC
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    if (queryResult._resultsCount == 0) throw new HTTPerror("Team not found", 404);

    const team = queryResult._results[0]._values[0].properties;
    team.drivers = [];
    const firstDriver = queryResult._results[0]._values[1].properties;
    firstDriver.isFirstDriver = queryResult._results[0]._values[2];
    const secondDriver = queryResult._results[1]._values[1].properties;
    secondDriver.isFirstDriver = queryResult._results[1]._values[2];
    team.drivers.push(firstDriver);
    team.drivers.push(secondDriver);
    return team;
};

export const getTeamService = async (req, res) => {
    const { params: { teamID } } = req;
    const result = await getTeamController(teamID);
    return res.send(result);
};