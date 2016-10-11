/**
 * Created by Yi on 11/10/2016.
 */

import {combineReducers} from 'redux-reducers'
import * as homeReducers from '../routes/Home/reducers'


export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ...homeReducers,
    ...asyncReducers
  })
}

export const injectReducer = (store, {key, reducer}) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer