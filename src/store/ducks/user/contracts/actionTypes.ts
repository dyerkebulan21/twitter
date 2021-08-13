import { Action } from "redux";
import { LoadingState } from "../../tweets/contracts/state";

import { User, UserState } from "./state";

export interface RootState {
  user: UserState;
}

export enum UserActionType {
  SET_USER_DATA = "user/SET_USER_DATA",
  SET_LOADING_DATA = "user/SET_LOADING_DATA",
}

export interface SetUserDataActionInterface extends Action<UserActionType> {
  type: UserActionType.SET_USER_DATA;
  payload: User;
}

export interface SetUserLoadingDataActionInterface
  extends Action<UserActionType> {
  type: UserActionType.SET_LOADING_DATA;
  payload: LoadingState;
}
