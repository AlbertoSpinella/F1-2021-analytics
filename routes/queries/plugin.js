import {
    getAllGrandPrixWinnersSchema,
    getAllGrandChelemsSchema,
    getGrandChelemDriversSchema
} from "./schema.js";

export const queriesPlugin = (fastify, options, done) => {
    fastify.get("/grandPrixWinner", getAllGrandPrixWinnersSchema);
    fastify.get("/grandChelem", getAllGrandChelemsSchema);
    fastify.get("/grandChelemDrivers", getGrandChelemDriversSchema);

    done();
};