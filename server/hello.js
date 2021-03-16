import express from 'express'
// import { createApp } from 'h3'
const app = express()
app.get('/', (_req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({ api: 'works!' })
})

export default app
