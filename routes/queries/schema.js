import { getAllGrandPrixWinnersService } from "./APIs/getAllGrandPrixWinners.js";
import { getAllGrandChelemsService } from "./APIs/getGrandChelems.js";
import { getGrandChelemDriversService } from "./APIs/getGrandChelemDrivers.js";
import { getAllFastestLapsService } from "./APIs/getAllFastestLaps.js";
import { positionsGainedOrLosedPerGPService } from "./APIs/positionsGainedOrLosedPerGP.js";
import { positionsGainedOrLosedPerGPByDriverIDService } from "./APIs/positionsGainedOrLosedPerGPByDriverID.js";
import { Driver, GrandPrix, paramsDriverID, responseRacedAt } from "../sharedSchemas.js";

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

const driverScore = {
    type: "object",
    required: ["firstName", "lastName", "shortName", "nationality", "number", "isFirstDriver", "age", "worldTitles", "performances"],
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        shortName: { type: "string" },
        nationality: { type: "string" },
        number: { type: "number" },
        isFirstDriver: { type: "boolean" },
        age: { type: "number" },
        worldTitles: { type: "number" },
        performances: {
            type: "array",
            items: {
                type: "object",
                required: ["gp", "date", "score"],
                properties: {
                    gp: { type: "string" },
                    date: { type: "string" },
                    score: { type: "number" }
                }
            }
        }
    }
};

export const positionsGainedOrLosedPerGPSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: driverScore
            }
        }
    },
    handler: positionsGainedOrLosedPerGPService
};

export const positionsGainedOrLosedPerGPByDriverIDSchema = {
    schema: {
        tags: ["QUERIES"],
        params: paramsDriverID,
        response: {
            200: driverScore
        }
    },
    handler: positionsGainedOrLosedPerGPByDriverIDService
};