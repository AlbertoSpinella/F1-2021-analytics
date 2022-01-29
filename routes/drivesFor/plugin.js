import {
    createDrivesForSchema
} from "./schema.js";

export const drivesForPlugin = (fastify, options, done) => {
    fastify.post("/:driverID/:teamID", createDrivesForSchema);

    done();
};