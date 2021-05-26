import {call, put, takeEvery} from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { FetchTweetDataActionInterface, setLoadingTweet, setTweet, TweetActionType, } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTweetRequest({payload: tweetId}: FetchTweetDataActionInterface){
  
    try{
        //@ts-ignore
        const item = yield call(TweetsApi.fetchTweets, tweetId)
        yield put(setTweet(item))
    }catch(err) {
        yield put(setLoadingTweet(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeEvery(TweetActionType.FETCH_DATA, fetchTweetRequest)
}