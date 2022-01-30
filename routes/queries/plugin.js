import {
    getAllGrandPrixWinnersSchema,
    getAllGrandChelemsSchema,
    getGrandChelemDriversSchema,
    getAllFastestLapsSchema
} from "./schema.js";

export const queriesPlugin = (fastify, options, done) => {
    fastify.get("/grandPrixWinner", getAllGrandPrixWinnersSchema);
    fastify.get("/grandChelem", getAllGrandChelemsSchema);
    fastify.get("/grandChelemDrivers", getGrandChelemDriversSchema);
    fastify.get("/fastestLap", getAllFastestLapsSchema);
    // fastify.get("/fastestLapLessData", getAllFastestLapsLessDataSchema);

    done();
};