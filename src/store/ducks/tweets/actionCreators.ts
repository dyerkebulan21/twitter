import {
  addFormStateActionInterface,
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  FetchTweetsActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingActionInterface,
} from "./contracts/actionTypes";
import {
  addFormState,
  LoadingStatus,
  Tweet,
  TweetsState,
} from "./contracts/state";

export enum TweetsActionType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  LOADING_TWEETS = "tweets/LOADING_TWEETS",
  FETCH_ADD_TWEET = "tweets/FETCH_ADD_TWEET",
  ADD_TWEET = "tweets/ADD_TWEET",
  SET_ADD_FORM_STATE = "tweets/SET_ADD_FORM_STATE",
}

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionType.FETCH_TWEETS,
});

export const setTweets = (
  payload: TweetsState["items"]
): SetTweetsActionInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload,
});

export const fetchAddTweet = (
  payload: string
): FetchAddTweetActionInterface => ({
  type: TweetsActionType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
  type: TweetsActionType.ADD_TWEET,
  payload,
});

export const setLoadingTweets = (
  payload: LoadingStatus
): SetTweetsLoadingActionInterface => ({
  type: TweetsActionType.LOADING_TWEETS,
  payload,
});

export const setAddFormState = (
  payload: addFormState
): addFormStateActionInterface => ({
  type: TweetsActionType.SET_ADD_FORM_STATE,
  payload,
});

export type TweetsActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingActionInterface
  | FetchTweetsActionInterface
  | FetchAddTweetActionInterface
  | AddTweetActionInterface
  | addFormStateActionInterface;
