import { ApolloServer } from "@apollo/server";
import express, { json } from 'express'
import dotenv from 'dotenv'
import http from 'http'
import { TicketContext } from "./context.js";
import cors from 'cors'
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from "./common/index.js";
dotenv.config()
// barrel file 
const { env } = process
// initialize app.
const api = express() // REST API library
// create apollo server
const server = new ApolloServer<Partial<TicketContext>>({ typeDefs, resolvers });
// create http server
const httserver = http.createServer(api);
await server.start()

api.use(
  env.ENDPOINT as string,
  cors<cors.CorsRequest>({ origin: (env.ORIGINS as string)?.split('|') }),
  json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({ req, res }),
  }),
);
new Promise<void>((resolve) => httserver.listen({ port: env.PORT ? +env.PORT : 6700 }, resolve))
console.log(`🚀 Server ready at http://localhost:${env.PORT}/tickets`);