import {
    createDrivesForSchema,
    createRacedAtSchema
} from "./schema.js";

export const relationsPlugin = (fastify, options, done) => {
    fastify.post("/:driverID/drivesFor/:teamID", createDrivesForSchema);
    fastify.post("/:driverID/racedAt/:grandPrixID", createRacedAtSchema);

    done();
};