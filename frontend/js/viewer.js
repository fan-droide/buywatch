import { tvepisodesApi, gql } from './server-api.js'
const id = 1
const { data } = await tvepisodesApi.query(gql`
    query($id: ID!) {
      getTvepisodeById(id: $id) {
        id
        name
        price
        tvserie {
          id
          name
        }
      }
    }
  `, { id });

console.log(data)