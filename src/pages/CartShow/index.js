import React from "react"
import styles from "./styles.module.scss"
import CartItemList from "components/CartItemList"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Button from "components/Button"
import Money from "components/Money"
import { emptyCart } from "actions/cart"

// Extract to own component
const EmptyState = () => (
  <div className={styles.emptyContainer}>
    <img
      className={styles.emptyImage}
      src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/empty_xct9.svg"
    />

    <p>
      Varukorgen är tom. Här kan du hitta våra <Link to="/">Produkter</Link>
    </p>
  </div>
)

const CartShow = ({ loadCart, cart, products, emptyCart }) => {
  const items = Object.values(cart.items)

  const hasItems = items.length > 0

  return (
    <main className={styles.container}>
      {hasItems && (
        <header>
          <h1>Varukorg</h1>
          Totalt varor för{" "}
          <Money
            amount={items.reduce(
              (acc, item) => acc + item.Quantity * products[item.Id].Price,
              0
            )}
          />
        </header>
      )}

      {hasItems && (
        <div>
          <CartItemList
            products={products}
            onChange={console.log}
            items={items}
          />

          <div className={styles.actions}>
            <Button onClick={emptyCart} variant="hollow">
              Empty Cart
            </Button>
            <Button onClick={() => alert("Not implemented")}>Checkout</Button>
          </div>
        </div>
      )}

      {!hasItems && <EmptyState />}
    </main>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products.data,
})

export default connect(
  mapStateToProps,
  { emptyCart }
)(CartShow)
