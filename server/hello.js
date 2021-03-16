import express from 'express'
const app = express()

// It failed when deploy.
// https://github.com/unjs/h3/issues/21
// import { createApp } from 'h3'
// const app = createApp()
// app.use('/', (_req, res) => {

app.get('/', (_req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  return res.json({ api: 'works!' })
})

export default app
