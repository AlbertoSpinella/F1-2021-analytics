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