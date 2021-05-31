import {Action} from 'redux'
import { LoadingState,  TweetState } from "./contracts/state";

export interface RootState {
    tweet: TweetState
}
export enum TweetActionType {
    SET_DATA = 'tweet/SET_DATA',
    FETCH_DATA = 'tweet/FETCH_DATA',
    LOADING_DATA = 'tweet/LOADING_DATA',
    
}

export interface SetTweetDataActionInterface extends Action<TweetActionType> {
    type: TweetActionType.SET_DATA,
    payload: TweetState['data']
}

export interface SetTweetDataLoadingActionInterface extends Action<TweetActionType> {
    type: TweetActionType.LOADING_DATA,
    payload: LoadingState
}


export interface FetchTweetDataActionInterface extends Action<TweetActionType> {
    type: TweetActionType.FETCH_DATA,
    payload: string
}
export const fetchTweetData = (payload:string): FetchTweetDataActionInterface => ({
    type: TweetActionType.FETCH_DATA,
    payload
})



export const setTweet = (payload: TweetState['data']): SetTweetDataActionInterface => ({
    type: TweetActionType.SET_DATA,
    payload
})

export const setLoadingTweet = (payload: LoadingState): SetTweetDataLoadingActionInterface => ({
    type: TweetActionType.LOADING_DATA,
    payload
})



export type TweetActions = SetTweetDataActionInterface | SetTweetDataLoadingActionInterface | FetchTweetDataActionInterface