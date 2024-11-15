import { useYmlGenerator } from '~/composables'

export default defineEventHandler(async (event) => {
  const ymlFeed = await useYmlGenerator()
  event.node.res.setHeader('Content-Type', 'application/xml')
  return ymlFeed
})
