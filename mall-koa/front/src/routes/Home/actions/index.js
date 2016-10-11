/**
 * Created by Yi on 11/10/2016.
 */


export const HOME_TEST = 'HOME_TEST'

export function homeTest(payload = '') {
  return {
    type: HOME_TEST,
    payload: payload
  }
}

