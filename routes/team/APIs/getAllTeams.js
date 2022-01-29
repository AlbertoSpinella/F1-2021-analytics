const getAllTeamsController = async () => {
    const query = `
        MATCH (t:Team)<-[r:DrivesFor]-(d:Driver)
        RETURN t,d
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const teams = [];
    let isFirstDriver = true;

    for (let i = 0; i< queryResult._results.length; i++) {
        const team = queryResult._results[i];
        const teamData = team._values[0]?.properties;
        if (isFirstDriver) {
            isFirstDriver = false;
            teamData.drivers = [];
            teams.push(teamData);
        } else isFirstDriver = true;

        const index = Math.ceil(i / 2) - i % 2;
        teams[index].drivers.push(team._values[1].properties);
    }
    return teams;
};

export const getAllTeamsService = async (req, res) => {
    const result = await getAllTeamsController();
    return res.send(result);
};