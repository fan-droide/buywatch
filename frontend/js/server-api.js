import { createClient } from '@urql/core';

const graphqlClient = createClient({
  url: "http://127.0.0.1:3042/graphql",
  requestPolicy: "network-only"
});

async function graphqlClientWrapper(method, gqlQuery, queryVariables = {}) {
    const queryResult = await graphqlClient[method](
        gqlQuery,
        queryVariables
    ).toPromise();

    if (queryResult.error) {
        console.error("GraphQL error:", queryResult.error);
    }

    return {
        data: queryResult.data,
        error: queryResult.error,
    };
}

export const quotesApi = {
    async query(gqlQuery, queryVariables = {}) {
        return await graphqlClientWrapper("query", gqlQuery, queryVariables);
    },
    async mutation(gqlQuery, queryVariables = {}) {
        return await graphqlClientWrapper("mutation", gqlQuery, queryVariables);
    }
}


export { gql } from "@urql/core";


