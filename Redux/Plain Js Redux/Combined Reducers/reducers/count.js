export function changeCount(val = 0) {
  return {
    type: "CHANGE_COUNT",
    payload: val
  }
}

export default function countReducer(count = 0, action) {
  switch(action.type) {
    case "CHANGE_COUNT": {
      return count + action.payload
    }

    default: {
      return count
    }
  }
}