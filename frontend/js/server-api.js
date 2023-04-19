import { createClient, gql } from '@urql/core'

const graphqlClient = createClient({
    url: 'http://127.0.0.1:3042/graphql',
    requestPolicy: 'network-only'
})

async function graphqlClientWrapper(method, gqlQuery, queryVariables = {}) {
    const queryResult = await graphqlClient[method](
        gqlQuery,
        queryVariables
    ).toPromise()

    if (queryResult.error) {
        console.error('GraphQL error:', queryResult.error)
    }

    return {
        data: queryResult.data,
        error: queryResult.error,
    }
}

async function getTVserieId(serieName, seriePrice, serieOwnerWebId) {
  
    let serieId = null

    // Check if a movie already exists with the provided name.
    const queryTVseriesResult = await tvepisodesApi.query(
        gql`
        query ($serieName: String!) {
          tvseries(where: { name: { eq: $serieName } }) {
            id
          }
        }
      `,
        { serieName }
    )

    if (queryTVseriesResult.error) {
        return null
    }

    const serieExists = queryTVseriesResult.data?.tvseries.length === 1
    if (serieExists) {
        serieId = queryTVseriesResult.data.tvseries[0].id
    } else {
        // Create a new tvserie entity record.
        const saveTVserieResult = await tvepisodesApi.mutation(
            gql`
          mutation ($serieName: String!, $seriePrice: String!, $serieOwnerWebId: String!) {
            saveTvseries(input: { name: $serieName , price: $seriePrice, copyrightHolderWebid: $serieOwnerWebId}) {
              id
            }
          }
        `,
            { serieName , seriePrice, serieOwnerWebId}
        )

        if (saveTVserieResult.error) {
            return null
        }
        
        serieId = saveTVserieResult.data?.saveTvseries.id
    }

    return serieId
}


export const tvepisodesApi = {
    async query(gqlQuery, queryVariables = {}) {
        return await graphqlClientWrapper('query', gqlQuery, queryVariables)
    },
    async mutation(gqlQuery, queryVariables = {}) {
        return await graphqlClientWrapper('mutation', gqlQuery, queryVariables)
    },
    getTVserieId
}


export { gql } from '@urql/core'


