# BUYWATCH


`git clone https://github.com/fan-droide/buywatch.git`

`cd buywatch`

Create `.env` file with the following content:

```
PORT=3042
PLT_SERVER_HOSTNAME=127.0.0.1
PLT_SERVER_LOGGER_LEVEL=info
DATABASE_URL=sqlite://./<THEDBNAME>.sqlite

```

`npm i`

`npx platformatic db migrations apply`

`npx platformatic db seed seed.js`

`npm run dev`

`http://localhost:8080/`


## More info about Platformatic:
https://oss.platformatic.dev/docs/getting-started/movie-quotes-app-tutorial/