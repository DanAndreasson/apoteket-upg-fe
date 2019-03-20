import React, { useEffect } from "react"
import styles from "./styles.module.scss"
import Cart from "components/Cart"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={styles.container}>
      <Link to="/">
        <div className={styles.logo}>App o̲ Tech</div>
      </Link>

      <nav>
        <Link to="/">Produkter</Link>
      </nav>

      <Cart />
    </header>
  )
}

export default Header
