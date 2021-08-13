import {
  SetUserDataActionInterface,
  UserActionType,
} from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

export const setUserData = (
  payload: UserState["data"]
): SetUserDataActionInterface => ({
  type: UserActionType.SET_USER_DATA,
  payload,
});



export type UserActions = SetUserDataActionInterface;
