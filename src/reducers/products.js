import * as types from "actions/products"
import { normalizeBy } from "utils/normalize"

const initialState = {
  data: {},
  isFetching: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: normalizeBy(action.response, "Id"),
        isFetching: false,
      }
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

export default reducer
