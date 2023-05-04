# docker containers

### mongoDB

```ps
  docker run -d -p 21017:21017 --network notes-net --rm --name mongodb mongo
```

### backend

```ps
  docker build -t server ./server
```

```ps
  docker run -d -p 5000:5000 --network notes-net -v D:/docker-mern/server/app.js:/app -v /app/node_modules --rm --name notes-backend server
```

### frontend

```ps
  docker build -t client .
```

```ps
  docker run -d -p 3000:3000 --rm --name notes-frontend client
```
