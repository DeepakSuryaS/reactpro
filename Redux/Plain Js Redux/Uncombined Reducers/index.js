const redux = require('redux')

function changeCount(val = 0) {
  return {
    type: "CHANGE_COUNT",
    payload: val
  }
}

function addFavorite(thing) {
  return {
    type: "ADD_FAVORITE_THING",
    payload: thing
  }
}

function removeFavorite(thing) {
  return {
    type: "REMOVE_FAVORITE_THING",
    payload: thing
  }
}

function setVideoTitle(title) {
  return {
    type: "SET_VIDEO_TITLE",
    payload: title
  }
}

function upvoteVideo(val) {
  return {
    type: "UPVOTE_VIDEO"
  }
}

function downvoteVideo(val) {
  return {
    type: "DOWNVOTE_VIDEO"
  }
}

function incrementViewCount() {
  return {
    type: "INCREMENT_VIEW_COUNT"
  }
}

const initialState = {
  count: 0,
  favoriteThings = [],
  youtubeVideo: {
    title: "",
    viewCount: 0,
    votes: {
      up: 0,
      down: 0
    }
  }
}


function reducer(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_COUNT": {
      return {
        ...state,
        count: state.count + action.payload
      }
    }
    case "ADD_FAVORITE_THING": {
      return {
        ...state,
        favoriteThings: [...state.favoriteThings, action.payload]
      }
    }
    case "REMOVE_FAVORITE_THING": {
      const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
      return {
        ...state,
        favoriteThings: updatedArr
      }
    }
    case "SET_VIDEO_TITLE": {
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          title: action.payload
        }
      }
    }
    case "UPVOTE_VIDEO": {
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          votes: {
            ...state.youtubeVideo.votes,
            up: state.youtubeVideo.votes.up + 1
          }
        }
      }
    }
    case "DOWNVOTE_VIDEO": {
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          votes: {
            ...state.youtubeVideo.votes,
            down: state.youtubeVideo.votes.down - 1
          }
        }
      }
    }
    case "INCREMENT_VIEW_COUNT": {
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          viewCount: state.youtubeVideo.viewCount + 1
        }
      }
    }

    default: {
      return state
    }
  }
}

const store = redux.createStore(reducer)
// console.log(store)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(changeCount(2))
store.dispatch(changeCount(-4))
store.dispatch(changeCount())
store.dispatch(addFavorite("Apple"))
store.dispatch(removeFavorite("Apple"))
store.dispatch(setVideoTitle("Dummy video title"))
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())