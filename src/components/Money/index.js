import React from "react"

const Money = ({ amount, currency = "SEK" }) =>
  amount.toLocaleString(undefined, { style: "currency", currency })

export default React.memo(Money)
