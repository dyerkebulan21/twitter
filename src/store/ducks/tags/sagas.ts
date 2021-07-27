import {call, put,  takeLatest} from 'redux-saga/effects'
import { TagsApi } from '../../../services/api/tagsApi'
import { setLoadingTags, setTags, TagsActionType, } from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTagsRequest(){
  
    try{
        //@ts-ignore
        const item = yield call(TagsApi.fetchTags)
        yield put(setTags(item))
    }catch(err) {
        yield put(setLoadingTags(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeLatest(TagsActionType.FETCH_TAGS, fetchTagsRequest)
}