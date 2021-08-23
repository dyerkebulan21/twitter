import { LoginFormProps } from "../../../pages/SignIn/components/LoginModal";
import {
  SetUserDataActionInterface,
  UserActionsType,
  SetUserLoadingDataActionInterface,
  FetchSignInActionInterface,
} from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

export const setUserData = (
  payload: UserState["data"]
): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export const setLoadingStatusUser = (
  payload: UserState["status"]
): SetUserLoadingDataActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchSignIn = (
  payload: LoginFormProps
): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export type UserActions = SetUserDataActionInterface;
