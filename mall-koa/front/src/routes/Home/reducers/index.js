import {HOME_TEST} from '../actions'

const initialState = []

export const homeTestReducers = (state = initialState, action) => {
  console.log('homeTestReducers ...==================================')
  switch (action.type) {
    case HOME_TEST:
      return [...state, ...action.payload]
    default:
      return state
  }
}



