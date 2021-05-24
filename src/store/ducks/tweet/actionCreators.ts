import {Action} from 'redux'
import { LoadingState,  TweetState } from "./contracts/state";

export enum TweetActionType {
    SET_DATA = 'tweet/SET_DATA',
    FETCH_DATA = 'tweet/FETCH_DATA',
    LOADING_DATA = 'tweet/LOADING_DATA',
    
}

export interface SetTweetDataActionInterface extends Action<TweetActionType> {
    type: TweetActionType.SET_DATA,
    payload: TweetState
}

export interface SetTweetDataLoadingActionInterface extends Action<TweetActionType> {
    type: TweetActionType.LOADING_DATA,
    payload: LoadingState
}


export interface FetchTweetActionInterface extends Action<TweetActionType> {
    type: TweetActionType.FETCH_DATA,
 
}
export const fetchTweet = (): FetchTweetActionInterface => ({
    type: TweetActionType.FETCH_DATA,
    
})

export interface RootState {
    tweet: TweetState
}

export const setTweet = (payload: TweetState): SetTweetDataActionInterface => ({
    type: TweetActionType.SET_DATA,
    payload
})

export const setLoadingTweet = (payload: LoadingState): SetTweetDataLoadingActionInterface => ({
    type: TweetActionType.LOADING_DATA,
    payload
})



export type TweetActions = SetTweetDataActionInterface | SetTweetDataLoadingActionInterface | FetchTweetActionInterface