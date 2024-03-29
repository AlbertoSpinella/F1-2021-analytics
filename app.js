import Fastify from "fastify";
import fastifySwagger from "fastify-swagger";
import graph from "./libs/redisgraph.js";
import { teamPlugin } from "./routes/team/plugin.js";
import { driverPlugin } from "./routes/driver/plugin.js";
import { relationsPlugin } from "./routes/relations/plugin.js";
import { grandPrixPlugin } from "./routes/grandPrix/plugin.js";
import { queriesPlugin } from "./routes/queries/plugin.js";

const app = Fastify();

app.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    openapi: {
        info: { title: "fastify-api", version: "0.1.0" },
        tags: [
            { name: "TEAM", description: "Team API" },
            { name: "DRIVER", description: "Driver API" },
            { name: "DRIVESFOR", description: "Relations API" },
            { name: "GRANDPRIX", description: "GrandPrix API" },
            { name: "QUERIES", description: "Queries API" }
        ]
    },
});

app.register(teamPlugin, { prefix: "/team" });
app.register(driverPlugin, { prefix: "/driver" });
app.register(relationsPlugin, { prefix: "/relations" });
app.register(grandPrixPlugin, { prefix: "/grandPrix" });
app.register(queriesPlugin, { prefix: "/queries" });

export default app;