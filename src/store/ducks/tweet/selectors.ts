
import { createSelector } from "reselect";
import { RootState } from "./actionCreators";
import { LoadingState, TweetState } from "./contracts/state";

export const selectTweet = (state: RootState): TweetState => state.tweet

export const selectTweetLoading = (state: RootState):LoadingState => selectTweet(state).loadingState

export const selectIsTweetLoading = (state: RootState): boolean => selectTweetLoading(state) === LoadingState.LOADING

export const selectIsTweetLoaded = (state: RootState): boolean => selectTweetLoading(state) === LoadingState.LOADED

export const selectedTweetData = createSelector(selectTweet, (tweet) => tweet.data)