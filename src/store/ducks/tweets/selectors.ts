
import { createSelector } from "reselect";
import { RootState } from "./contracts/actionTypes";
import { addFormState, LoadingStatus, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetsState => state.tweets

export const selectTweetsLoading = (state: RootState):LoadingStatus => selectTweets(state).LoadingStatus

export const selectIsTweetsLoading = (state: RootState): boolean => selectTweetsLoading(state) === LoadingStatus.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean => selectTweetsLoading(state) === LoadingStatus.LOADED

export const selectAddFormState = (state: RootState): addFormState => selectTweets(state).addFormState

export const selectedTweetsItem = createSelector(selectTweets, (tweets) => tweets.items)