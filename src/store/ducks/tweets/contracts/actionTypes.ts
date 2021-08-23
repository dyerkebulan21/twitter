import { Action } from "redux";

import { TweetsActionType } from "../actionCreators";
import { addFormState, LoadingStatus, Tweet, TweetsState } from "./state";

export interface RootState {
  tweets: TweetsState;
}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS;
  payload: TweetsState["items"];
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_ADD_TWEET;
  payload: string;
}

export interface AddTweetActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.ADD_TWEET;
  payload: Tweet;
}

export interface SetTweetsLoadingActionInterface
  extends Action<TweetsActionType> {
  type: TweetsActionType.LOADING_TWEETS;
  payload: LoadingStatus;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS;
}

export interface addFormStateActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_ADD_FORM_STATE;
  payload: addFormState;
}
