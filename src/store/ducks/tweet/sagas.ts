import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { setLoadingTweet, setTweet, TweetActionType, } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTweetRequest(){
  
    try{
        //@ts-ignore
        const item = yield call(TweetsApi.fetchTweets)
        yield put(setTweet(item))
    }catch(err) {
        yield put(setLoadingTweet(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeLatest(TweetActionType.FETCH_DATA, fetchTweetRequest)
}