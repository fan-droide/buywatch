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


## TEST Queries

```
curl --request POST --header "Content-Type: application/json" \
  -d "{ \"name\": \"Toto, I've got a feeling we're not in Kansas anymore.\", \"episodeNumber\": \"1\", \"creativeWorkSeason\": \"1\", \"price\": \"0.1\", \"copyrightHolderWebid\": \"https://fandroide.solidcommunity.net\" }" \
  http://localhost:3042/tvepisodes



mutation {
  saveTvseries(input: { name: "The Wizard of Oz", price:"12.5", copyrightHolderWebid:"https://fandroide.solidcommunity.net" }) {
    id
  }
}

mutation {
  saveTvepisode(input: { id: 1, tvserieId: 1 }) {
    id
    name
    episodeNumber
    creativeWorkSeason
    datePublished
    copyrightHolderWebid
    price
    tvserie {
      id
      name
      price
      copyrightHolderWebid
    }
  }
}


query {
  tvepisodes {
    id
    name
    episodeNumber
    creativeWorkSeason
    datePublished
    copyrightHolderWebid
    price
    tvserie {
      id
      name
      price
      copyrightHolderWebid
    }
  }
}
```