
import { createSelector } from "reselect";
import { RootState } from "./actionCreators";
import { LoadingStatus, TweetState } from "./contracts/state";

export const selectTweet = (state: RootState): TweetState => state.tweet

export const selectTweetLoading = (state: RootState):LoadingStatus => selectTweet(state).LoadingStatus

export const selectIsTweetLoading = (state: RootState): boolean => selectTweetLoading(state) === LoadingStatus.LOADING

export const selectIsTweetLoaded = (state: RootState): boolean => selectTweetLoading(state) === LoadingStatus.LOADED

export const selectedTweetData = createSelector(selectTweet, (tweet) => tweet.data)