import * as types from "actions/notifications"

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NOTIFICATION:
      return {
        ...state,
        [action.notification.id]: action.notification,
      }
    case types.DELETE_NOTIFICATION:
      const { [action.id]: deletedNotification, ...rest } = state
      return rest
    default:
      return state
  }
}

export default reducer
