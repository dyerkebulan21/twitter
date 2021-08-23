import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { LoadingStatus } from "../../../types";
import { Tweet } from "../tweets/contracts/state";
import {
  FetchTweetDataActionInterface,
  setLoadingTweet,
  setTweet,
  TweetActionType,
} from "./actionCreators";

export function* fetchTweetRequest({
  payload: tweetId,
}: FetchTweetDataActionInterface) {
  try {
    const item: Tweet = yield call(TweetsApi.fetchTweet, tweetId);
    yield put(setTweet(item));
  } catch (err) {
    yield put(setLoadingTweet(LoadingStatus.ERROR));
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionType.FETCH_DATA, fetchTweetRequest);
}
