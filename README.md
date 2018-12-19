## a reverse proxy for docker-compose env example

```
## build & run sample docker-compose
docker-compose build
docker-compose up

## app 1 check
curl localhost:3001

## app 2 check
curl localhost:3002

## check from the reverse proxy
curl localhost:8080/
curl localhost:8080/images/
```