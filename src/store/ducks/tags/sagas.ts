import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi'
import { setLoadingTags, setTags, TagsActionType, } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTagsRequest(){
  
    try{
        //@ts-ignore
        const item = yield call(TweetsApi.fetchTweets)
        yield put(setTags(item))
    }catch(err) {
        yield put(setLoadingTags(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeLatest(TagsActionType.FETCH_TAGS, fetchTagsRequest)
}