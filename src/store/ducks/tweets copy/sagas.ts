import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { setLoadingTweets, setTweets, TweetsActionType, } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTweetsRequest(){
  
    try{
        //@ts-ignore
        const item = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(item))
    }catch(err) {
        yield put(setLoadingTweets(LoadingState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
}