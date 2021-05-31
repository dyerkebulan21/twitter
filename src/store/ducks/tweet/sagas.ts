import {call, put,  takeLatest} from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { FetchTweetDataActionInterface, setLoadingTweet, setTweet, TweetActionType, } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTweetRequest({payload: tweetId}: FetchTweetDataActionInterface){
  
    try{
        //@ts-ignore
        const item: Tweet[] = yield call(TweetsApi.fetchTweet, tweetId)
        yield put(setTweet(item[0]))
    }catch(err) {
        yield put(setLoadingTweet(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionType.FETCH_DATA, fetchTweetRequest)
}