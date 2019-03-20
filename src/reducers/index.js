import { combineReducers } from "redux"
import notifications from "reducers/notifications"
import products from "reducers/products"
import cart from "reducers/cart"

export default combineReducers({
  products,
  cart,
  notifications,
})
