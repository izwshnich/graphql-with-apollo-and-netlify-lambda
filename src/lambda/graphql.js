import { ApolloServer, gql } from 'apollo-server-lambda'
import fetch from 'node-fetch'

const typeDefs = gql`
  type Query {
    akita: [String]
  }
`

const resolvers = {
  Query: {
    akita: async () => {
      try {
        const res = await fetch(`https://dog.ceo/api/breed/Akita/images`)
        const { message } = await res.json()

        return message
      } catch (err) {
        throw new Error(err)
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

exports.handler = server.createHandler()
