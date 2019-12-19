export function setUserDetails(user) {
  return {
    type: "SET_USER_DETAILS"
  }
}

export function removeUserDetails() {
  return {
    type: "REMOVE_USER_DETAILS"
  }
}

export default function userReducer(user = {}, action) {
  switch(action.type) {
    case "SET_USER_DETAILS": {
      return {
        ...user,
        ...action.payload
      }
    }
    case "REMOVE_USER_DETAILS": {
      return {}
    }

    default: {
      return user
    }
  }
}