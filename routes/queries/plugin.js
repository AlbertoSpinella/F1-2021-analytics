import {
    getAllGrandPrixWinnersSchema,
    getAllGrandChelemsSchema,
    getGrandChelemDriversSchema,
    getAllFastestLapsSchema,
    positionsGainedOrLosedPerGPSchema,
    positionsGainedOrLosedPerGPByDriverIDSchema,
    neverReachedQSchema,
    qualifiedFirstSchema
} from "./schema.js";

export const queriesPlugin = (fastify, options, done) => {
    fastify.get("/grandPrixWinner", getAllGrandPrixWinnersSchema);
    fastify.get("/grandChelem", getAllGrandChelemsSchema);
    fastify.get("/grandChelemDrivers", getGrandChelemDriversSchema);
    fastify.get("/fastestLap", getAllFastestLapsSchema);
    fastify.get("/positionsGainedOrLosedPerGP", positionsGainedOrLosedPerGPSchema);
    fastify.get("/positionsGainedOrLosedPerGP/:driverID", positionsGainedOrLosedPerGPByDriverIDSchema);
    fastify.get("/neverReached/:Q", neverReachedQSchema);
    fastify.get("/qualifiedFirst", qualifiedFirstSchema);

    done();
};