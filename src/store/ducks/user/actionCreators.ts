import {
  FetchUserDataActionInterface
} from "./contracts/actionTypes";
import {
  User
} from "./contracts/state";

export enum UserActionType {
  SET_USER_DATA = "tweets/SET_USER_DATA",
 
}

export const fetchTweets = (): FetchUserDataActionInterface => ({
  type: UserActionType.SET_USER_DATA,
  payload:
});


export type UserActions =
  | FetchUserDataActionInterface;
