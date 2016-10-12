/**
 * Created by Yi on 11/10/2016.
 */

import {combineReducers} from 'redux'
import * as homeReducers from '../../routes/Home/reducers'
import locationReducer from './location'

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