docker network create redis_g_i
docker run -d -p 6379:6379 --name redisgraph --network redis_g_i redislabs/redisgraph
docker run -d -v redisinsight:/db -p 8001:8001 --name redisinsight --network redis_g_i redislabs/redisinsight:latest