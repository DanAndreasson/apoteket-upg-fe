import generate_uuid from "uuid/v1"

export const CREATE_NOTIFICATION = "CREATE_NOTIFICATION"
export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION"

export const createNotification = message => dispatch => {
  const id = generate_uuid()

  dispatch({
    type: CREATE_NOTIFICATION,
    notification: {
      id,
      message,
    },
  })

  setTimeout(() => dispatch({ type: DELETE_NOTIFICATION, id }), 5000)
}
