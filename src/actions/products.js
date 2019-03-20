export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST"
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE"

export const loadProducts = () => ({
  types: [GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE],
  callAPI: () => fetch("http://apoteket-uppgift-fe.ginzburg.it/api/products"),
  transform: response =>  response.filter(product => product.Price)
  ,
})
