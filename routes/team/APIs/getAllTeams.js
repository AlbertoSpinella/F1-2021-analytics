// const getAllTeamsController = async () => {
//     const query = `
//         MATCH (t:Team)<-[r:DrivesFor]-(d:Driver)
//         RETURN t,d
//     `;
//     logRGQuery(query);
//     const queryResult = await graph.query(query);

//     const teams = [];
//     let isFirstDriver = true;

//     for (let i = 0; i< queryResult._results.length; i++) {
//         const team = queryResult._results[i];
//         const teamData = team._values[0]?.properties;
//         if (isFirstDriver) {
//             isFirstDriver = false;
//             teamData.drivers = [];
//             teams.push(teamData);
//         } else isFirstDriver = true;

//         const index = Math.ceil(i / 2) - i % 2;
//         teams[index].drivers.push(team._values[1].properties);
//     }
//     return teams;
// };

const getAllTeamsController = async () => {
    const query = `
        MATCH (t:Team)<-[r:DrivesFor]-(d:Driver)
        WITH t, d
        ORDER BY d.isFirstDriver DESC
        RETURN t, collect(d), collect(d.isFirstDriver = 'true') as isFirstDriver
        ORDER BY t.id
    `;
    logRGQuery(query);
    const queryResult = await graph.query(query);

    const teams = [];
    queryResult._results.forEach(team => {
        const teamData = team._values[0].properties;
        console.log("teamData", teamData);
        const drivers = [];
        for (let i = 0; i < team._values[1].length; i++) {
            const driverData = team._values[1][i].properties;
            console.log("driverData", driverData);
            driverData.isFirstDriver = team._values[2][i];
            console.log("isFirstDriver", team._values[2][i]);
            drivers.push(driverData);
        }
        teamData.drivers = drivers;
        teams.push(teamData);
    });
    return teams;
};

export const getAllTeamsService = async (req, res) => {
    const result = await getAllTeamsController();
    return res.send(result);
};