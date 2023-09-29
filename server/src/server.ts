import fastify from 'fastify'
import { contactsRoute } from './routes/contacts'

const app = fastify()

app.register(contactsRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
