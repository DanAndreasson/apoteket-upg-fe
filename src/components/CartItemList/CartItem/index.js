import React from "react"
import styles from "./styles.module.scss"
import Money from "components/Money"

const CartItem = ({ product, cartItem }) => {
  if (!product) return "Loading.."

  const total = product.Price * cartItem.Quantity

  return (
    <article className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${product.Pic})` }}
      />
      <div className={styles.info}>
        <header className={styles.title}>{product.Name}</header>
        <main className={styles.description}>{product.Description}</main>
        <div><Money amount={product.Price} /> á</div>
      </div>

      <div className={styles.actions}>
        <div className={styles.price}><Money amount={total} /></div>
      </div>
    </article>
  )
}

export default CartItem
