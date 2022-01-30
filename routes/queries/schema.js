import { getAllGrandPrixWinnersService } from "./APIs/getAllGrandPrixWinners.js";

export const getAllGrandPrixWinnersSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    required: ["driver", "grandPrix"],
                    properties: {
                        driver: { type: "string" },
                        grandPrix: { type: "string" }
                    }
                }
            }
        }
    },
    handler: getAllGrandPrixWinnersService
};