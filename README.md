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

Query mancanti:
 - Dammi tutti i piloti che non sono mai arrivati in Q2
 - Dammi tutti i piloti che non sono mai arrivati in Q3
 - Dammi tutti i piloti che sono smepre andati a punti
 - Dammi soltanto le gare che hanno avuto qualifiche sprint
 - Dammi tutti i piloti che hanno vinto almeno un punto dalle qualifiche sprint
 - Dammi la classifica piloti
 - Dammi la classifica costruttori
 - Dammi le scuderie in cui il secondo pilota ha fatto più punti del primo
 - Per ogni scuderia, dammi le gare in cui il secondo pilota ha fatto più punti del primo
 - Per ogni pilota, dammi il numero di sorpassi netti che ha fatto in totale
 - Per ogni pilota, dammi il numero sommato di tutte le posizioni guadagnate e perse
 - Per ogni gara, dammi la classifica piloti corrente
 - Per ogni gara, dammi la classifica costruttori corrente
 - Nella getGP, ordinare per ordine di arrivo? Occorre guardare al momento com'è