// import { injectReducer } from '../../store/reducers'
import { injectReducer } from '../../redux/reducers'
export default (store) => ({
  path : 'list',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const List = require('./containers/ListContainer').default
      const reducer = require('./modules/list').default

      /*  Add the reducer to the store on key 'list'  */
      injectReducer(store, { key: 'list', reducer })

      /*  Return getComponent   */
      cb(null, List)

    /* Webpack named bundle   */
    }, 'list')
  }
})
