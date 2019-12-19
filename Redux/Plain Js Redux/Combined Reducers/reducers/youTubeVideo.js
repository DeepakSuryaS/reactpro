export function setVideoTitle(title) {
  return {
    type: "SET_VIDEO_TITLE",
    payload: title
  }
}

export function upvoteVideo(val) {
  return {
    type: "UPVOTE_VIDEO"
  }
}

export function downvoteVideo(val) {
  return {
    type: "DOWNVOTE_VIDEO"
  }
}

export function incrementViewCount() {
  return {
    type: "INCREMENT_VIEW_COUNT"
  }
}

const initialState = {
  title: "",
  viewCount: 0,
  votes: {
    up: 0,
    down: 0
  }
}

export default function youTubeVideoReducer(youTubeVideo = initialState) {
  switch(action.type) {
    case "SET_VIDEO_TITLE": {
      return {
        ...youTubeVideo,
        title: action.payload
      }
    }
    case "UPVOTE_VIDEO": {
      return {
        ...youTubeVideo,
        votes: {
          ...youTubeVideo.votes,
          up: youTubeVideo.votes.up + 1
        }
      }
    }
    case "DOWNVOTE_VIDEO": {
      return {
        ...youTubeVideo,
        votes: {
          ...youTubeVideo.votes,
          down: youTubeVideo.votes.down - 1
        }
      }
    }
    case "INCREMENT_VIEW_COUNT": {
      return {
        ...youTubeVideo,
        viewCount: youTubeVideo.viewCount + 1
      }
    }

    default: {
      return youTubeVideo
    }
  }
}