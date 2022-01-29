import {
    createTeamService
} from "./APIs/createTeam.js";

export const createTeamSchema = {
    schema: {
        tags: ["TEAM"],
        body: {
            type: "object",
            required: ["name", "colors", "nationality", "teamPrincipal"],
            properties: {
                name: { type: "string" },
                colors: {
                    type: "object",
                    required: ["primary", "secondary"],
                    properties: {
                        primary: { type: "string" },
                        secondary: { type: "string" }
                    },
                    additionalProperties: false
                },
                nationality: { type: "string" },
                teamPrincipal: { type: "string" }
            },
            additionalProperties: false
        },
        response: {
            200: {
                type: "object",
                required: ["name", "primaryColor", "secondaryColor", "nationality", "teamPrincipal"],
                properties: {
                    name: { type: "string" },
                    primaryColor: { type: "string" },
                    secondaryColor: { type: "string" },
                    nationality: { type: "string" },
                    teamPrincipal: { type: "string" }
                }
            }
        }
    },
    handler: createTeamService
};