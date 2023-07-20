import { ApolloServer } from "@apollo/server";
import express, {json} from 'express'
import dotenv from 'dotenv'
import http from 'http'
import { TicketContext } from "./context";
import cors from 'cors'
import { expressMiddleware } from '@apollo/server/express4';
dotenv.config()
const {env} = process
// initialize app.
const api = express()
// create apollo server
const server = new ApolloServer<TicketContext>({typeDefs, resolvers});
// create http server
const httserver = http.createServer(api)
api.use(
    '/tickets',
    cors<cors.CorsRequest>({origin: (env.ORIGINS as string)?.split('|')}),
    json(),
    expressMiddleware(server, {
      context: async ({ req,res }) => ({ req, res }),
    }),
  
  );
   server.start().then(r=>r)
   new Promise<void>((resolve) => httserver.listen({ port: env.PORT? +env.PORT:6700  }, resolve)).then(r=>r);
  console.log(`🚀 Server ready at http://localhost:${env.PORT}/tickets`);
// branch off the api to use express behind the scenes