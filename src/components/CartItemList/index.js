import React from "react"
import CartItem from "./CartItem"
import styles from "./styles.module.scss"

const CartItemList = ({ items, products, onChange }) => (
  <div className={styles.container}>
    {items.map(item => (
      <CartItem
        key={item.Id}
        cartItem={item}
        product={products[item.Id]}
        onChange={onChange}
      />
    ))}
  </div>
)

export default CartItemList
