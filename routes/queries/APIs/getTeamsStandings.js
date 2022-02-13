const getTeamsStandingsController = async () => {
    const query = `
        MATCH (t:Team)<-[df:DrivesFor]-(d:Driver)
        WITH t, df, d
        MATCH (d)-[r:RacedAt]->(g:GrandPrix)
        WITH t.name as teamName, collect(r) as races, sum(r.points + r.pointsFromSprint) as points
        RETURN teamName, points
        ORDER BY points DESC
    `;
    logRGQuery(query);

    const queryResult = await graph.query(query);

    const teams = [];
    let position = 1;

    queryResult._results.forEach(result => {
        const team = {
            name: result._values[0],
            points: result._values[1],
            position
        }
        teams.push(team);
        position++;
    });

    return teams;
};

export const getTeamsStandingsService = async (req, res) => {
    const result = await getTeamsStandingsController();
    return res.send(result);
};