import React from "react"
import Product from "./Product"
import ProductSkeleton from "./ProductSkeleton"
import styles from "./styles.module.scss"

const ProductList = ({ onBuy, products, showSkeletons }) => (
  <div className={styles.container}>
    {showSkeletons && [0, 1, 2, 3, 4, 5, 6, 7].map(i => <ProductSkeleton key={i} />)}

    {products.map(product => (
      <Product key={product.Id} product={product} onBuy={onBuy} />
    ))}
  </div>
)

export default ProductList
