import {Action} from 'redux'

import { LoadingState, Tweet, TweetsState } from "./contracts/state";

export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    LOADING_TWEETS = 'tweets/LOADING_TWEETS',
    ADD_TWEETS = 'tweets/ADD_TWEET'
}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.SET_TWEETS,
    payload: TweetsState['items']
}

export interface AddTweetsActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.ADD_TWEETS,
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

export const addTweet = (payload: Tweet):AddTweetsActionInterface => ({
    type: TweetsActionType.ADD_TWEETS,
    payload
})

export const setLoadingTweets = (payload: LoadingState): SetTweetsLoadingActionInterface => ({
    type: TweetsActionType.LOADING_TWEETS,
    payload
})



export type TweetsActions = SetTweetsActionInterface | SetTweetsLoadingActionInterface | FetchTweetsActionInterface