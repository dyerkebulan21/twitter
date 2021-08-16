import { Action } from "redux";
import { LoadingState } from "../../tweets/contracts/state";

import { User, UserState } from "./state";

export interface RootState {
  user: UserState;
}

export enum UserActionsType {
  SET_USER_DATA = "user/SET_USER_DATA",
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: User | undefined;
}

export interface SetUserLoadingDataActionInterface
  extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
