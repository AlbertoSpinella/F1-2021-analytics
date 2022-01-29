import {
    createTeamSchema,
    getAllTeamsSchema,
    getTeamSchema,
    deleteTeamSchema
} from "./schema.js";

export const teamPlugin = (fastify, options, done) => {
    fastify.post("/", createTeamSchema);
    fastify.get("/", getAllTeamsSchema);
    fastify.get("/:teamID", getTeamSchema);
    fastify.delete("/:teamID", deleteTeamSchema);

    done();
};