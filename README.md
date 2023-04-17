# BUYWATCH


`git clone https://github.com/fan-droide/buywatch.git`

`cd buywatch`

Adapt `.env` file content:

```
PORT=3042
PLT_SERVER_HOSTNAME=127.0.0.1
PLT_SERVER_LOGGER_LEVEL=info
DATABASE_URL=sqlite://./<THEDBNAME>.sqlite
PLT_SERVER_CORS_ORIGIN=http://localhost:8080
```


Inside the "frontend" folder, adapt `.env` file content:

```
VITE_PUBLIC_GRAPHQL_API_ENDPOINT=http://127.0.0.1:3042/graphql

```
`npm i`

`npx platformatic db migrations apply`

`npx platformatic db seed seed.js`

`npm run dev`

`http://localhost:8080/`


## More info about Platformatic:
https://oss.platformatic.dev/docs/getting-started/movie-quotes-app-tutorial/