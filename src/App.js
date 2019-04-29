import React from 'react'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, Query } from "react-apollo"
import Dogs from './components/Dogs'

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
})

const App = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          akita
        }
      `}
    >
      {props => <Dogs {...props} />
      }
    </Query>
  </ApolloProvider>
)

export default App
