import { saveLikeToggle, saveTweet } from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export function receiveTweets (tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}

function toggleTweet ({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  }
}

function addTweet (tweet, replyingTo) {
  return {
    type: ADD_TWEET,
  }
}

export function handleAddTweet (tweet, replyingTo) {
  return (dispatch) => {

    return saveTweet(tweet)
      .then(() => dispatch(addTweet(tweet, replyingTo)))
      .catch((e) => {
        console.warn('Error with saving the tweet: ', e)
        dispatch()
      })
  }
}

export function handleToggleTweet (info) {
  return (dispatch) => {
    dispatch(toggleTweet(info))

    return saveLikeToggle(info)
      .catch((e) => {
        console.warn('Error in handleToggleTweet: ', e)
        dispatch(toggleTweet(info))
        alert('The was an error liking the tweet. Try again.')
      })
  }
}