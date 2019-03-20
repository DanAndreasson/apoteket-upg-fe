import React from "react"
import styles from "./styles.module.scss"
import Button from "components/Button"
import Money from "components/Money"

const Product = ({ product, onBuy }) => (
  <article className={styles.container}>
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${product.Pic || "https://az870929.vo.msecnd.net/cdn/media/data/default/product-large.ashx"})` }}
    />

    <header className={styles.title}>{product.Name}</header>
    <main className={styles.description}>{product.Description}</main>

    <div className={styles.actions}>
      <span className={styles.price}>
        {product.Price ? <Money amount={product.Price} />: "-"}
      </span>
      {!product.Buyable  &&  <span>Tillfälligt slut</span>}
      {product.Buyable && <Button onClick={() => onBuy(product.Id)}>Köp</Button>}
    </div>
  </article>
)

export default Product
