# docker containers

### network

```ps
  docker network create notes-net
```

### mongoDB

```ps
  docker run -d -p 21017:21017 --network notes-net --rm --name mongodb mongo
```

### backend

```ps
  docker build -t server ./server
```

```ps
  docker run -d -p 5000:5000 --network notes-net -v D:/docker-mern/server:/app -v /app/node_modules --rm --name notes-backend server
```

### frontend

```ps
  docker build -t client ./client
```

```ps
  docker run -d -p 3000:3000 --rm -v D:/docker-mern/client/src:/app/src -v /app/node_modules --name notes-frontend client
```
