const getTeamsStandingsByGrandPrixIDController = async (grandPrixID) => {
    const query = `
        MATCH (t:Team)<-[df:DrivesFor]-(d:Driver)
        WITH t, df, d
        MATCH (g:GrandPrix{id:'${grandPrixID}'})
        WITH t, g as record, d
        MATCH (d)-[r:RacedAt]->(g:GrandPrix)
        WITH t.name as teamName, r, g
        WHERE g.date <= record.date
        RETURN teamName, sum(r.points + r.pointsFromSprint) as points
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

export const getTeamsStandingsByGrandPrixIDService = async (req, res) => {
    const { params: { grandPrixID } } = req;
    const result = await getTeamsStandingsByGrandPrixIDController(grandPrixID);
    return res.send(result);
};