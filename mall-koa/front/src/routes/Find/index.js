import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'find',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Find = require('./containers/FindContainer').default
      const reducer = require('./modules/find').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'find', reducer })

      /*  Return getComponent   */
      cb(null, Find)

    /* Webpack named bundle   */
    }, 'find')
  }
})
