import React, { useEffect, memo } from "react"
import styles from "./styles.module.scss"
import { connect } from "react-redux"
import { loadCart } from "actions/cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Money from "components/Money"

const Cart = ({ cart, loadCart, products }) => {
  useEffect(() => {
    loadCart()
    return
  }, [])

  const quantity = Object.values(cart.items).reduce(
    (quantity, item) => quantity + item.Quantity,
    0
  )

  const total = Object.values(cart.items).reduce(
    (total, item) =>
      total + item.Quantity * (products[item.Id] || { Price: 0 }).Price,
    0
  )

  return (
    <Link to="/cart" className={styles.container}>
      <FontAwesomeIcon icon="shopping-cart" className={styles.icon} />
      {quantity > 0 && <div className={styles.quantity}>{quantity}</div>}
      <div>
        <Money amount={total} />
      </div>
    </Link>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products.data,
})

export default memo(
  connect(
    mapStateToProps,
    { loadCart }
  )(Cart)
)
