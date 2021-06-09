import {Action} from 'redux'

import { LoadingState, Tweet, TweetsState } from "./contracts/state";

export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    LOADING_TWEETS = 'tweets/LOADING_TWEETS',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET'
}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.SET_TWEETS,
    payload: TweetsState['items']
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.FETCH_ADD_TWEET,
    payload: string
}

export interface AddTweetActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.ADD_TWEET,
    payload: Tweet
}

export interface SetTweetsLoadingActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.LOADING_TWEETS,
    payload: LoadingState
}


export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.FETCH_TWEETS,
 
}
export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionType.FETCH_TWEETS,
    
})

export interface RootState {
    tweets: TweetsState
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionType.SET_TWEETS,
    payload
})

export const fetchAddTweet = (payload: string):FetchAddTweetActionInterface => ({
    type: TweetsActionType.FETCH_ADD_TWEET,
    payload
})

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionType.ADD_TWEET,
    payload
})

export const setLoadingTweets = (payload: LoadingState): SetTweetsLoadingActionInterface => ({
    type: TweetsActionType.LOADING_TWEETS,
    payload
})



export type TweetsActions = SetTweetsActionInterface | SetTweetsLoadingActionInterface | FetchTweetsActionInterface