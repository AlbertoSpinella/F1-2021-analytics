import { getAllGrandPrixWinnersService } from "./APIs/getAllGrandPrixWinners.js";
import { getAllGrandChelemsService } from "./APIs/getGrandChelems.js";
import { getGrandChelemDriversService } from "./APIs/getGrandChelemDrivers.js";
import { getAllFastestLapsService } from "./APIs/getAllFastestLaps.js";
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

export const getAllGrandChelemsSchema = {
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
    handler: getAllGrandChelemsService
};

export const getGrandChelemDriversSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: { type: "string" }
            }
        }
    },
    handler: getGrandChelemDriversService
};

export const getAllFastestLapsSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: responseRacedAt
            }
        }
    },
    handler: getAllFastestLapsService
};