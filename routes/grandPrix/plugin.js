import {
    createGrandPrixSchema,
    getAllGrandPrixSchema,
    getGrandPrixSchema,
    deleteGrandPrixSchema
} from "./schema.js";

export const grandPrixPlugin = (fastify, options, done) => {
    fastify.post("/", createGrandPrixSchema);
    fastify.get("/", getAllGrandPrixSchema);
    fastify.get("/:grandPrixID", getGrandPrixSchema);
    fastify.delete("/:grandPrixID", deleteGrandPrixSchema);

    done();
};