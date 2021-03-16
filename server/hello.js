import express from 'express'
const app = express()

// import { createApp } from 'h3'
// const app = createApp()

app.get('/', (_req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  return res.json({ api: 'works!' })
})

export default app
