# F1 2021 analytics

This project is just for fun and it's not completed (nor updated).
Once cloned the repo, run the following commands to setup redis:
```bash
npm ci
npm run redis:start
```

Visit localhost:8001 to view data. Set the following parameters:
 - Host: redisgraph
 - Port: 6379
 - Name: localhost

To start the server, run `npm run dev`.
To create data from seeds:
 - For 2021 data, run `npm run seeds:2021`
 - For 2022 data, run `npm run seeds:2022`
