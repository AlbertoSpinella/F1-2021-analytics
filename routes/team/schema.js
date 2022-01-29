import { createTeamService } from "./APIs/createTeam.js";
import { getAllTeamsService } from "./APIs/getAllTeams.js";
import { getTeamService } from "./APIs/getTeam.js";
import { deleteTeamService } from "./APIs/deleteTeam.js";

import { Driver, responseMessage, Team } from "../sharedSchemas.js";

const TeamWithDrivers = {
    type: "object",
    required: ["name", "primaryColor", "secondaryColor", "nationality", "teamPrincipal", "drivers"],
    properties: {
        name: { type: "string" },
        primaryColor: { type: "string" },
        secondaryColor: { type: "string" },
        nationality: { type: "string" },
        teamPrincipal: { type: "string" },
        drivers: {
            type: "array",
            items: Driver
        }
    }
};

const paramsTeamID = {
    type: "object",
    required: ["teamID"],
    properties: {
        teamID: { type: "string" }
    },
    additionalProperties: false
};


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
            200: Team
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
                items: TeamWithDrivers
            }
        }
    },
    handler: getAllTeamsService
};

export const getTeamSchema = {
    schema: {
        tags: ["TEAM"],
        params: paramsTeamID,
        response: {
            200: TeamWithDrivers
        }
    },
    handler: getTeamService
};

export const deleteTeamSchema = {
    schema: {
        tags: ["TEAM"],
        params: paramsTeamID,
        response: {
            200: responseMessage
        }
    },
    handler: deleteTeamService
};