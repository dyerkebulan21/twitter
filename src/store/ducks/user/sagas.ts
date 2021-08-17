import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { setLoadingStatusUser, setUserData } from "./actionCreators";
import { FetchSignInActionInterface } from "./contracts/actionTypes";

export function* fetchSignInRequest({payload}:FetchSignInActionInterface) {
  try {
    //@ts-ignore
    const data = yield call(AuthApi.sigin, payload);
    yield put(setUserData(data));
  } catch (err) {
    yield put(setLoadingStatusUser(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionType.FETCH_ADD_TWEET, addTweetsRequest);
}
