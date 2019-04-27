import React from 'react'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, Query } from "react-apollo"

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
})

const App = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          articles {
            title
          }
        }
      `}
    >
      {({ data }) => data.articles ? (
          <ul>
            {data.articles.map(article => (
              <li key={article.title}>{article.title}</li>
            ))}
          </ul>
        ) : null
      }
    </Query>
  </ApolloProvider>
)

export default App
