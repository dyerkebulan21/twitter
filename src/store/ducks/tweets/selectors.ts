
import { createSelector } from "reselect";
import { RootState } from "./actionCreators";
import { LoadingState, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectTweetsLoading = (state: RootState):LoadingState => selectTweets(state).loadingState

export const selectIsTweetsLoading = (state: RootState): boolean => selectTweetsLoading(state) === LoadingState.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean => selectTweetsLoading(state) === LoadingState.LOADED

export const selectedTweetsItem = createSelector(selectTweets, (tweets) => tweets.items)