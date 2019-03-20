import React from "react"
import styles from "./styles.module.scss"

import { connect } from "react-redux"

const Notification = ({ id, message }) => (
  <div className={styles.notification}>{message}</div>
)

const Notifications = ({ notifications }) => {
  return (
    <section className={styles.container}>
      {Object.values(notifications).map(notification => (
        <Notification key={notification.id} {...notification} />
      ))}
    </section>
  )
}

const mapStateToProps = state => ({
  notifications: state.notifications,
})

export default connect(mapStateToProps)(Notifications)
