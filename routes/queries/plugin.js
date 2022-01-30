import {
    getAllGrandPrixWinnersSchema
} from "./schema.js";

export const queriesPlugin = (fastify, options, done) => {
    fastify.get("/grandPrixWinner", getAllGrandPrixWinnersSchema);

    done();
};