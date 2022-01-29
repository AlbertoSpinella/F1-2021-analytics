import { Driver, paramsDriverIDTeamID, paramsDriverIDGrandPrixID, Team } from "../sharedSchemas.js";
import { createDrivesForService } from "./APIs/createDrivesFor.js";
import { createRacedAtService } from "./APIs/createRacedAt.js";

export const createDrivesForSchema = {
    schema: {
        tags: ["DRIVESFOR"],
        params: paramsDriverIDTeamID,
        body: {
            type: "object",
            required: ["since"],
            properties: {
                since: { type: "number" }
            }
        },
        response: {
            200: {
                type: "object",
                required: ["driver", "team"],
                properties: {
                    driver: Driver,
                    team: Team
                }
            }
        }
    },
    handler: createDrivesForService
};

export const createRacedAtSchema = {
    schema: {
        tags: ["DRIVESFOR"],
        params: paramsDriverIDGrandPrixID,
        body: {
            type: "object",
            required: ["position", "points", "fastestLap", "qualified", "pointsFromSprint"],
            properties: {
                position: { type: "number" },
                points: { type: "number" },
                fastestLap: { type: "boolean" },
                qualified: { type: "number" },
                pointsFromSprint: { type: "number" }
            }
        },
    },
    handler: createRacedAtService
};