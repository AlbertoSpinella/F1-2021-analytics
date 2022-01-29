# F1 2021 analytics

Once cloned the repo, run the following commands to setup redis:
```
npm ci
npm run redis:start
```

Visit localhost:8001 to view data. Set the following parameters:
 - Host: redisgraph
 - Port: 6379
 - Name: localhost

To view data, run the following query:
```
GRAPH.QUERY "Boilerplate" "match (n) return n"
```
