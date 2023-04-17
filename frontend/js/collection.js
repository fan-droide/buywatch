import { quotesApi, gql } from './server-api.js';

const { data } = await quotesApi.query(gql`
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
`);

const tvepisodes = data?.tvepisodes || [];
console.log(tvepisodes)