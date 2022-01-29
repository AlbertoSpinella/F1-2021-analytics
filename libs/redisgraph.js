import RedisGraphJS from "redisgraph.js";
const RedisGraph = RedisGraphJS.Graph;

global.graph = new RedisGraph("F1-2021-statistics");

global.logRGQuery = (query) => {
    console.log(`${new Date().toISOString()} RedisGraph query:`);
    console.log(query.replace(/\n |  /gm,''));
    console.log();
};

export const graphDelete = async () => {
    const res = await graph.deleteGraph();
    return {result: res._statistics._raw};
};

export default graph;