import { createTeamService } from "./APIs/createTeam.js";
import { getAllTeamsService } from "./APIs/getAllTeams.js";
import { getTeamService } from "./APIs/getTeam.js";
import { deleteTeamService } from "./APIs/deleteTeam.js";

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

export const getAllTeamsSchema = {
    schema: {
        tags: ["TEAM"],
        response: {
            200: {
                type: "array",
                items: {
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
        }
    },
    handler: getAllTeamsService
};

export const getTeamSchema = {
    schema: {
        tags: ["TEAM"],
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
    handler: getTeamService
};

export const deleteTeamSchema = {
    schema: {
        tags: ["TEAM"]
    },
    handler: deleteTeamService
};