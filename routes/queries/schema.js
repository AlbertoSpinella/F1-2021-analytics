import { getAllGrandPrixWinnersService } from "./APIs/getAllGrandPrixWinners.js";
import { getAllGrandChelemsService } from "./APIs/getGrandChelems.js";
import { getGrandChelemDriversService } from "./APIs/getGrandChelemDrivers.js";
import { getAllFastestLapsService } from "./APIs/getAllFastestLaps.js";
import { positionsGainedOrLosedPerGPService } from "./APIs/positionsGainedOrLosedPerGP.js";
import { positionsGainedOrLosedPerGPByDriverIDService } from "./APIs/positionsGainedOrLosedPerGPByDriverID.js";
import { Driver, GrandPrix, paramsDriverID, paramsGrandPrixID, responseRacedAt } from "../sharedSchemas.js";
import { neverReachedQService } from "./APIs/neverReachedQ.js";
import { qualifiedFirstService } from "./APIs/qualifiedFirst.js";
import { bestRacesOfDriversService } from "./APIs/bestRacesOfDrivers.js";
import { bestRacesByDriverIDService } from "./APIs/bestRacesByDriverID.js";
import { worstRacesOfDriversService } from "./APIs/worstRacesOfDrivers.js";
import { worstRacesByDriverIDService } from "./APIs/worstRacesByDriverID.js";
import { allDriversAtPointsService } from "./APIs/allDriversAtPoints.js";
import { getDriversStandingsService } from "./APIs/getDriversStandings.js";
import { getTeamsStandingsService } from "./APIs/getTeamsStandings.js";
import { getDriversStandingsByGrandPrixIDService } from "./APIs/getDriversStandingsByGrandPrixID.js";
import { getTeamsStandingsByGrandPrixIDService } from "./APIs/getTeamsStandingsByGrandPrixID.js";

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

export const neverReachedQSchema = {
    schema: {
        tags: ["QUERIES"],
        params: {
            type: "object",
            required: ["Q"],
            properties: {
                Q: {
                    type: "string",
                    enum: ["Q2", "Q3"]
                }
            },
            additionalProperties: false
        },
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        driver: { type: "string" },
                        bestQualified: { type: "number" }
                    }
                }
            }
        }
    },
    handler: neverReachedQService
};

export const qualifiedFirstSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        driverName: { type: "string" },
                        GPs: {
                            type: "array",
                            items: { type: "string" }
                        }
                    }
                }
            }
        }
    },
    handler: qualifiedFirstService
};

export const bestRacesOfDriversSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        driverName: { type: "string" },
                        best: { type: "number" },
                        count: { type: "number" },
                        races: {
                            type: "array",
                            items: responseRacedAt
                        }
                    }
                }
            }
        }
    },
    handler: bestRacesOfDriversService
};

export const bestRacesByDriverIDSchema = {
    schema: {
        tags: ["QUERIES"],
        params: paramsDriverID,
        response: {
            200: {
                type: "object",
                properties: {
                    driverName: { type: "string" },
                    best: { type: "number" },
                    count: { type: "number" },
                    races: {
                        type: "array",
                        items: responseRacedAt
                    }
                }
            }
        }
    },
    handler: bestRacesByDriverIDService
};

export const worstRacesOfDriversSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        driverName: { type: "string" },
                        worst: { type: "number" },
                        count: { type: "number" },
                        races: {
                            type: "array",
                            items: responseRacedAt
                        }
                    }
                }
            }
        }
    },
    handler: worstRacesOfDriversService
};

export const worstRacesByDriverIDSchema = {
    schema: {
        tags: ["QUERIES"],
        params: paramsDriverID,
        response: {
            200: {
                type: "object",
                properties: {
                    driverName: { type: "string" },
                    worst: { type: "number" },
                    count: { type: "number" },
                    races: {
                        type: "array",
                        items: responseRacedAt
                    }
                }
            }
        }
    },
    handler: worstRacesByDriverIDService
};

export const allDriversAtPointsSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: { type: "string" }
            }
        }
    },
    handler: allDriversAtPointsService
};

export const getDriversStandingsSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        points: { type: "number" },
                        position: { type: "number" }
                    }
                }
            }
        }
    },
    handler: getDriversStandingsService
};

export const getTeamsStandingsSchema = {
    schema: {
        tags: ["QUERIES"],
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        points: { type: "number" },
                        position: { type: "number" }
                    }
                }
            }
        }
    },
    handler: getTeamsStandingsService
};

export const getDriversStandingsByGrandPrixIDSchema = {
    schema: {
        tags: ["QUERIES"],
        params: paramsGrandPrixID,
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        points: { type: "number" },
                        position: { type: "number" }
                    }
                }
            }
        }
    },
    handler: getDriversStandingsByGrandPrixIDService
};

export const getTeamsStandingsByGrandPrixIDSchema = {
    schema: {
        tags: ["QUERIES"],
        params: paramsGrandPrixID,
        response: {
            200: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        points: { type: "number" },
                        position: { type: "number" }
                    }
                }
            }
        }
    },
    handler: getTeamsStandingsByGrandPrixIDService
};