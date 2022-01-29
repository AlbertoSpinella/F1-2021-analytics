import graph from "../../../libs/redisgraph.js";

const createTeamController = async (team) => {
    const query = `
        MERGE (t:Team{id:'${team.name}',name:'${team.name}',primaryColor:'${team.colors.primary}',secondaryColor:'${team.colors.secondary}',nationality:'${team.nationality}',teamPrincipal:'${team.teamPrincipal}'})
        RETURN t
    `;
    const res = await graph.query(query);
    return res._results[0]._values[0].properties;
};

export const createTeamService = async (req, res) => {
    const { body } = req;
    const result = await createTeamController(body);
    return res.send(result);
};