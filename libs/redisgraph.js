import RedisGraphJS from "redisgraph.js";
const RedisGraph = RedisGraphJS.Graph;


let graph = new RedisGraph("Bandfinder");

export const graphDelete = async () => {
    const res = await graph.deleteGraph();
    return {result: res._statistics._raw};
};

export default graph;