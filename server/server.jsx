import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {RouterContext, match} from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from '../app/routes'
import configureStore from '../app/store'
import fetchComponentData from '../app/utils/fetchComponentData'

const config = require('../webpack.config.dev')
const app = new express()
const compiler = webpack(config)
const port = process.env.PORT || 3000

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use((req, res) => {
  const location = createLocation(req.url)

  match({routes, location}, (err, redirectLocation, renderProps) => {
    if(err) {
      console.error(err)
      return res.status(500).end('Internal server error')
    }

    if(!renderProps)
      return res.status(404).end('Not found')

    const store = configureStore()

    const renderView = () => {
      const initialView = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
      const componentHTML = renderToString(initialView)
      const initialState = store.getState()

      return `
        <!DOCTYPE html>
        <html>
        <head>
        	<meta charset="utf-8">
        	<meta http-equiv="X-UA-Compatible" content="IE=edge">
        	<meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Katana</title>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>
        </head>
        <body>
          <div id="app">${componentHTML}</div>
          <script type="application/javascript" src="bundle.js"></script>
        </body>
        </html>
      `
    }

    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(renderView)
      .then(html => res.status(200).end(html))
      .catch(err => res.end(err.message))
  })
})

app.listen(port, function(err) {
  if (err) {
    console.error(err)
    return
  }
  console.info('Listening at http://localhost:%s', port)
})
