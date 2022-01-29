import { createDrivesForService } from "./APIs/createDrivesFor.js";

export const createDrivesForSchema = {
    schema: {
        tags: ["DRIVESFOR"],
        body: {
            type: "object",
            required: ["since"],
            properties: {
                since: { type: "number" }
            }
        }
    },
    handler: createDrivesForService
};