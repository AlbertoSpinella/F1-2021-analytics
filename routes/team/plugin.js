import {
    createTeamSchema
} from "./schema.js";

export const teamPlugin = (fastify, options, done) => {
    fastify.post("/", createTeamSchema);

    done();
};