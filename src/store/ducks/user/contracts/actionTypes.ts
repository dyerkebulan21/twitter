import { Action } from "redux";

import { UserActionType } from "../actionCreators";
import { User, UserState } from "./state";


export interface FetchUserDataActionInterface extends Action<UserActionType> {
  type: UserActionType.SET_USER_DATA;
  payload: User;
}
