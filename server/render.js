import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {RouterContext, match} from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from '../app/routes'
import configureStore from '../app/store'
import fetchComponentData from '../app/utils/fetchComponentData'

export default function render(req, res) {
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
          <script type="application/javascript" src="dist/bundle.js"></script>
        </body>
        </html>
      `
    }

    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(renderView)
      .then(html => res.status(200).end(html))
      .catch(err => res.end(err.message))
  })
}
