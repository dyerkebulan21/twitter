
import { createSelector } from "reselect";
import { RootState } from "./contracts/actionTypes";
import { addFormState, LoadingState, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectTweetsLoading = (state: RootState):LoadingState => selectTweets(state).loadingState

export const selectIsTweetsLoading = (state: RootState): boolean => selectTweetsLoading(state) === LoadingState.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean => selectTweetsLoading(state) === LoadingState.LOADED

export const selectAddFormState = (state: RootState): addFormState => selectTweets(state).addFormState

export const selectedTweetsItem = createSelector(selectTweets, (tweets) => tweets.items)