import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import render from './render'

const app = new express()
const port = process.env.PORT || 3000

if(process.env.NODE_ENV !== 'production') {
  const serverConfig = require('../webpack.config.dev')
  const compiler = webpack(serverConfig)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: serverConfig.output.publicPath
  }))
  app.use(webpackHotMiddleware(compiler))
} else {
  app.use(express.static(path.join(__dirname, '../public')))
}

app.use((req, res, cb) => {
  if(req.path.startsWith('/api/')) {
    console.log('go to /api/')
    return cb()
  } else {
    return render(req, res)
  }
})

app.listen(port, function(err) {
  if(err) {
    console.error(err)
    return
  }
  console.info('Listening at http://localhost:%s', port)
})
