// @flow
type myStateReducer = {
  test: number
}
import { XD } from '../constants/testConstants'

export default function test(
  state: Object = {},
  action: Object
): myStateReducer {
  switch (action.type) {
    case XD:
      return {
        test: 'HELLOXOXOX'
      }
    default:
      return state
  }
}
