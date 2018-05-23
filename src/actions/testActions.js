import * as types from '../constants/testConstants'

export const XD = () => async dispatch => {
  const user = 'MERT'
  dispatch({ type: types.XD, payload: user })
}
