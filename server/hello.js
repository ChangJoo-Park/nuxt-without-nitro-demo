import { createApp } from 'h3'
const app = createApp()

app.use('/', (_req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  return { api: 'works!' }
})

export default app
