import { getAllGrandPrixWinnersService } from "./APIs/getAllGrandPrixWinners.js";
import { Driver, GrandPrix, responseRacedAt } from "../sharedSchemas.js";

export const getAllGrandPrixWinnersSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    required: ["driver", "racedAt", "grandPrix"],
                    properties: {
                        driver: Driver,
                        racedAt: responseRacedAt,
                        grandPrix: GrandPrix
                    }
                }
            }
        }
    },
    handler: getAllGrandPrixWinnersService
};