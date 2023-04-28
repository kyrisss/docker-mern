# docker containers

### mongoDB

```ps
  docker run -d -p 21017:21017 --rm --name mongodb mongo
```

### backend

```ps
  docker build -t server .
```

```ps
  docker run -d -p 5000:5000 --rm --name notes-backend server
```

### frontend

```ps
  docker build -t client .
```

```ps
  docker run -d -p 3000:3000 --rm --name notes-frontend client
```
