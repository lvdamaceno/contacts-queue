import fastify from 'fastify'
import cors from '@fastify/cors'
import { contactsRoute } from './routes/contacts'

const app = fastify()

app.register(cors, {
  // when in production, list the real urls how can connect to the data base
  origin: true,
})
app.register(contactsRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
