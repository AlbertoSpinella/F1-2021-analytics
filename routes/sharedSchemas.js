export const Driver = {
    type: "object",
    required: ["name", "surname", "nationality", "number", "isFirstDriver", "age", "worldTitles"],
    properties: {
        name: { type: "string" },
        surname: { type: "string" },
        nationality: { type: "string" },
        number: { type: "number" },
        isFirstDriver: { type: "boolean" },
        age: { type: "number" },
        worldTitles: { type: "number" }
    }
};

export const Team = {
    type: "object",
    required: ["name", "primaryColor", "secondaryColor", "nationality", "teamPrincipal"],
    properties: {
        name: { type: "string" },
        primaryColor: { type: "string" },
        secondaryColor: { type: "string" },
        nationality: { type: "string" },
        teamPrincipal: { type: "string" }
    }
};

export const responseMessage = {
    type: "object",
    required: ["message"],
    properties: {
        message: { type: "string" }
    }
};

export const paramsDriverIDTeamID = {
    type: "object",
    required: ["driverID",  "teamID"],
    properties: {
        driverID: { type: "string" },
        teamID: { type: "string" }
    },
    additionalProperties: false
};

export const GrandPrix = {
    type: "object",
    required: ["name", "circuit", "completeName", "nation", "city", "date"],
    properties: {
        name: { type: "string" },
        circuit: { type: "string" },
        completeName: { type: "string" },
        nation: { type: "string" },
        city: { type: "string" },
        date: { type: "string" }
    }
};

export const paramsGrandPrixID = {
    type: "object",
    required: ["grandPrixID"],
    properties: {
        grandPrixID: { type: "string" },
    },
    additionalProperties: false
};