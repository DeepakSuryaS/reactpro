import store from "./reducers"
import {changeCount} from "./reducers/count"
import {addFavoriteThing, removeFavoriteThing} from "./reducers/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./reducers/youTubeVideo"
import {setUserDetails, removeUserDetails} from "./reducers/user"

// console.log(store)

store.dispatch(changeCount(42))
store.dispatch(addFavoriteThing("Door bells"))
store.dispatch(addFavoriteThing("Sleigh bells"))
store.dispatch(removeFavoriteThing("door bells"))
store.dispatch(setYouTubeTitle("Learning Redux is Fun!"))
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())

store.dispatch(setUserDetails({
  firstName: "Joe",
  lastName: "Schmoe",
  id: 1,
  email: "joe@schmoe.com"
}))

store.dispatch(setUserDetails({
  email: "joe.schmoe@gmail.com"
}))

store.dispatch(removeUserDetails())