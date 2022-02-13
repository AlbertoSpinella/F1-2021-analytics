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

```

To start the server, run `npm run dev`. To create data from seeds, run `npm run seeds`.


Query mancanti:
 
 - Dammi le scuderie in cui il secondo pilota ha fatto più punti del primo
 - Per ogni scuderia, dammi le gare in cui il secondo pilota ha fatto più punti del primo
 
 - Per ogni pilota, dammi il numero di sorpassi netti che ha fatto in totale
 - Per ogni pilota, dammi il numero sommato di tutte le posizioni guadagnate e perse
 - Per ogni pilota, dammi la media delle posizioni di qualifica
 - Per ogni pilota, dammi la media delle posizioni di arrivo

 - Dammi la classifica finale dei piloti se non ci fossero i punti delle sprint 
 - Dammi la classifica finale dei costruttori se non ci fossero i punti delle sprint
 - Dammi soltanto le gare che hanno avuto qualifiche sprint
 - Dammi tutti i piloti che hanno vinto almeno un punto dalle qualifiche sprint