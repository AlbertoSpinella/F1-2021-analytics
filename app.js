import Fastify from "fastify";
import fastifySwagger from "fastify-swagger";
import graph from "./libs/redisgraph.js";
import { teamPlugin } from "./routes/team/plugin.js";
import { driverPlugin } from "./routes/driver/plugin.js";

const app = Fastify();

app.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    openapi: {
        info: { title: "fastify-api", version: "0.1.0" },
        tags: [
            { name: "TEAM", description: "Team API" },
            { name: "DRIVER", description: "Driver API" }
        ]
    },
});

app.register(teamPlugin, { prefix: "/team" });
app.register(driverPlugin, { prefix: "/driver" });

export default app;