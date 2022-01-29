import Fastify from "fastify";
import fastifySwagger from "fastify-swagger";
import { teamPlugin } from "./routes/team/plugin.js";

const app = Fastify();

app.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    openapi: {
        info: { title: "fastify-api", version: "0.1.0" },
        tags: [
            { name: "TEAM", description: "Team API" }
        ]
    },
});

app.register(teamPlugin, { prefix: "/team" });

export default app;