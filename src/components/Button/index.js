import React from "react"
import styles from "./styles.module.scss"
import cx from "classnames"

const Button = ({ children, onClick, variant }) => (
  <button
    onClick={onClick}
    className={cx(styles.container, styles[`variant-${variant}`])}
  >
    {children}
  </button>
)

export default Button
