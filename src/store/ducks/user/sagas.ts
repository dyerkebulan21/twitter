import { call, put, takeLatest } from "redux-saga/effects";
import { LoadingStatus } from "../tweets/contracts/state";

import { setLoadingStatusUser, setUserData } from "./actionCreators";
import {
  FetchSignInActionInterface,
  UserActionsType,
} from "./contracts/actionTypes";

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  try {
    //@ts-ignore
    const data = yield call(AuthApi.sigin, payload);
    yield put(setUserData(data));
  } catch (err) {
    yield put(setLoadingStatusUser(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}
