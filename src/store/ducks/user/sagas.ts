import { call, put, takeLatest } from "redux-saga/effects";
import { LoadingState } from "../tweets/contracts/state";

import { setLoadingStatusUser, setUserData } from "./actionCreators";
import { FetchSignInActionInterface, UserActionsType } from "./contracts/actionTypes";

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  try {
    //@ts-ignore
    const data = yield call(AuthApi.sigin, payload);
    yield put(setUserData(data));
  } catch (err) {
    yield put(setLoadingStatusUser(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, {});
  yield takeLatest(UserActionsType.SET_USER_DATA, {});
}
