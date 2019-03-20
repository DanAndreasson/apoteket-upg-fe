import httpStatus from "http-status"

import { createNotification } from "actions/notifications"

export const GET_CART_REQUEST = "GET_CART_REQUEST"
export const GET_CART_SUCCESS = "GET_CART_SUCCESS"
export const GET_CART_FAILURE = "GET_CART_FAILURE"

export const EMPTY_CART_REQUEST = "EMPTY_CART_REQUEST"
export const EMPTY_CART_SUCCESS = "EMPTY_CART_SUCCESS"
export const EMPTY_CART_FAILURE = "EMPTY_CART_FAILURE"

export const UPSERT_CART_ITEM_REQUEST = "UPSERT_CART_ITEM_REQUEST"
export const UPSERT_CART_ITEM_SUCCESS = "UPSERT_CART_ITEM_SUCCESS"
export const UPSERT_CART_ITEM_FAILURE = "UPSERT_CART_ITEM_FAILURE"

export const loadCart = () => ({
  types: [EMPTY_CART_REQUEST, EMPTY_CART_SUCCESS, EMPTY_CART_FAILURE],
  callAPI: () =>
    fetch("http://apoteket-uppgift-fe.ginzburg.it/api/cart", {
      headers: {
        method: "DELETE",
        "X-Key": "qwerty",
        "Content-Type": "application/json",
      },
    }),
})

export const emptyCart = () => ({
  types: [GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE],
  callAPI: () =>
    fetch("http://apoteket-uppgift-fe.ginzburg.it/api/cart", {
      headers: {
        "X-Key": "qwerty",
        "Content-Type": "application/json",
      },
    }),
})

export const addProductToCart = productId => async (dispatch, getStore) => {
  const store = getStore()

  const cart = store.cart
  const products = store.products.data

  if (cart.isFetching) return

  const item = { Id: productId, Quantity: 1 }

  const newTotal = Object.values(cart.items).reduce(
    (acc, item) => acc + item.Quantity * products[item.Id].Price,
    products[productId].Price
  )

  console.log(newTotal, products[productId].Price, products, productId)

  if (newTotal > 500) {
    dispatch(createNotification("Varukorgens värde får ej överstiga 5 000kr"))
    return
  }

  // TODO
  // Change to optimistic UI instead

  dispatch({ type: UPSERT_CART_ITEM_REQUEST })

  const response = await fetch(
    "http://apoteket-uppgift-fe.ginzburg.it/api/cart",
    {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "X-Key": "qwerty",
        "Content-Type": "application/json",
      },
    }
  )

  if (
    response.status == httpStatus.OK ||
    response.status == httpStatus.CREATED
  ) {
    dispatch({ type: UPSERT_CART_ITEM_SUCCESS, payload: item })
  } else {
    dispatch({ type: UPSERT_CART_ITEM_FAILURE })
  }
}
