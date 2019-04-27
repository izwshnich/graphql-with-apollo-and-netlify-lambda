import { ApolloServer, gql } from 'apollo-server-lambda'

// dummy data
import articles from './articles.json'

const typeDefs = gql`
  type Article {
    body: String
    id: Int
    image: String
    title: String
  }

  type Query {
    articles: [Article]
  }
`

const resolvers = {
  Query: {
    articles: () => articles,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

exports.handler = server.createHandler()
