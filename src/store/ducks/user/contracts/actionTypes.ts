import { Action } from "redux";
import { LoginFormProps } from "../../../../pages/SignIn/components/LoginModal";
import { LoadingState } from "../../tweets/contracts/state";

import { User, UserState } from "./state";

export interface RootState {
  user: UserState;
}

export enum UserActionsType {
  SET_USER_DATA = "user/SET_USER_DATA",
  SET_LOADING_STATE = "user/SET_LOADING_STATE",
  FETCH_SIGN_IN = "user/FETCH_SIGN_IN ",
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: LoginFormProps;
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
