import React from "react"
import styles from "./styles.module.scss"

const ProductSkeleton = ({ product, onBuy }) => (
  <article className={styles.container}>
    <div className={styles.image} />

    <header className={styles.title} />
    <main className={styles.description} />

    <div className={styles.actions}>
      <span className={styles.price} />
      <div className={styles.buy} />
    </div>
  </article>
)

export default ProductSkeleton
