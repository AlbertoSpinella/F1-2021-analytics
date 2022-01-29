import {
    createDriverSchema,
    getAllDriversSchema,
    getDriverSchema,
    deleteDriverSchema
} from "./schema.js";

export const driverPlugin = (fastify, options, done) => {
    fastify.post("/", createDriverSchema);
    fastify.get("/", getAllDriversSchema);
    fastify.get("/:driverID", getDriverSchema);
    fastify.delete("/:driverID", deleteDriverSchema);

    done();
};