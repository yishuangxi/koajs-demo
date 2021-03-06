import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './redux/store'
import AppContainer from './containers/AppContainer'
import createRoutes from './routes'

import {homeTest} from './routes/Home/actions'
// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  // ========================================================
  // store And routes Instantiation
  // ========================================================
  const initialState = window.___INITIAL_STATE__
  const store = createStore(initialState)
  const routes = createRoutes(store)

  ReactDOM.render(
    <AppContainer store={store} routes={routes}/>,
    MOUNT_NODE
  )
}

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error}/>, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// ========================================================
// Go!
// ========================================================
render()
