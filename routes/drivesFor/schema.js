import { Driver, paramsDriverIDTeamID, Team } from "../sharedSchemas.js";
import { createDrivesForService } from "./APIs/createDrivesFor.js";

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