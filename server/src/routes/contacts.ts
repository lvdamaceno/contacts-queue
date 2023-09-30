import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function contactsRoute(app: FastifyInstance) {
  // Get
  app.get('/contacts', async () => {
    const contacts = await prisma.contact.findFirst({
      where: {
        isUsed: false,
      },
    })
    return contacts?.id
  })

  app.get('/contacts/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(request.params)
    const contact = await prisma.contact.findUniqueOrThrow({
      where: {
        id,
      },
    })
    return contact.contactNumber
  })

  // Post
  app.post('/contacts', async (request) => {
    const bodySchema = z.object({
      contactNumber: z.string(),
      isUsed: z.coerce.boolean().default(false),
    })
    const { contactNumber } = bodySchema.parse(request.body)
    const contact = await prisma.contact.create({
      data: {
        contactNumber,
        userId: '72123e09-9165-4b0f-9a6c-a047300f0c07',
      },
    })
    return contact
  })

  // Update
  app.put('/contacts/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      isUsed: z.coerce.boolean().default(true),
    })
    const { isUsed } = bodySchema.parse(request.body)

    const contact = await prisma.contact.update({
      where: {
        id,
      },
      data: {
        isUsed,
      },
    })

    return contact
  })

  // Delete
  app.delete('/contacts/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramsSchema.parse(request.params)
    await prisma.contact.delete({
      where: {
        id,
      },
    })
  })
}
