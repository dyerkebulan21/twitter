import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { addTweet, setAddFormState, setLoadingTweets, setTweets, TweetsActionType, } from './actionCreators'
import { FetchAddTweetActionInterface } from './contracts/actionTypes'
import { addFormState, LoadingState } from './contracts/state'

export function* fetchTweetsRequest(){
  
    try{
        //@ts-ignore
        const items = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    }catch(err) {
        yield put(setLoadingTweets(LoadingState.ERROR))
    }
}

export function* addTweetsRequest({payload}: FetchAddTweetActionInterface) {
  
    try{
       
        const data = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: "Brian Vaughn 🖤",
                username: "brian_d_vaughn",
                avatarUrl: "https://pbs.twimg.com/profile_images/1290320630521487362/UKVSbU2V_bigger.jpg"
              },
        }
         //@ts-ignore
        const item = yield call(TweetsApi.addTweet, data)
        yield put(addTweet(item))
    }catch(err) {
        yield put(setAddFormState(addFormState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeLatest(TweetsActionType.FETCH_ADD_TWEET, addTweetsRequest)
}