import * as types from "actions/cart"
import { normalizeBy } from "utils/normalize"

const initialState = {
  items: {},
  isFetching: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EMPTY_CART_SUCCESS:
      return {
        ...state,
        items: {},
      }
    case types.GET_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case types.GET_CART_SUCCESS:
      return {
        ...state,
        items: normalizeBy(action.response, "Id"),
        isFetching: false,
      }
    case types.GET_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    case types.UPSERT_CART_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case types.UPSERT_CART_ITEM_SUCCESS:
      const newItems = {
        ...state.items,
        [action.payload.Id]: {
          Id: action.payload.Id,
          Quantity:
            (state.items[action.payload.Id] || { Quantity: 0 }).Quantity +
            action.payload.Quantity,
        },
      }

      return {
        ...state,
        isFetching: false,
        items: newItems,
      }
    case types.UPSERT_CART_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

export default reducer
