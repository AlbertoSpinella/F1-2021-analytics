import Fastify from "fastify";
import fastifySwagger from "fastify-swagger";
import graph from "./libs/redisgraph.js";
import { teamPlugin } from "./routes/team/plugin.js";
import { driverPlugin } from "./routes/driver/plugin.js";
import { drivesForPlugin } from "./routes/drivesFor/plugin.js";

const app = Fastify();

app.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    openapi: {
        info: { title: "fastify-api", version: "0.1.0" },
        tags: [
            { name: "TEAM", description: "Team API" },
            { name: "DRIVER", description: "Driver API" },
            { name: "DRIVESFOR", description: "DrivesFor API" }
        ]
    },
});

app.register(teamPlugin, { prefix: "/team" });
app.register(driverPlugin, { prefix: "/driver" });
app.register(drivesForPlugin, { prefix: "/drivesFor" });

export default app;