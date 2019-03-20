import React, { useEffect, useState } from "react"
import ProductList from "components/ProductList"
import { connect } from "react-redux"
import { loadProducts } from "actions/products"
import { addProductToCart } from "actions/cart"
import styles from "./styles.module.scss"

const ProductIndex = ({
  loadProducts,
  addProductToCart,
  products: { isFetching, data, errors },
}) => {
  useEffect(() => {
    loadProducts()
    return
  }, [])

  const [filter, setFilter] = useState("")

  const products = Object.values(data).filter(product =>
    filter
      .split(" ")
      .some(
        filter =>
          product.Name.toLowerCase().includes(filter.toLowerCase()) ||
          product.Description.toLowerCase().includes(filter.toLowerCase())
      )
  )

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Produkter</h1>
        <input
          value={filter}
          onChange={event => setFilter(event.target.value)}
          className={styles.filterInput}
          placeholder="Sök efter produkt.."
        />
      </header>

      <ProductList showSkeletons={isFetching && Object.keys(data).length === 0} products={products} onBuy={addProductToCart} />
    </main>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(
  mapStateToProps,
  { loadProducts, addProductToCart }
)(ProductIndex)
