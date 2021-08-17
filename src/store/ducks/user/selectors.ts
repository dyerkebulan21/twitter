import { createSelector } from "reselect";
import { RootState } from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

export const selectUserState = (state: RootState): UserState => state.user;

export const selectUserData = (state: RootState): UserState["data"] =>
  selectUserState(state).data;

export const selectUserLoadingStatus = (
  state: RootState
): UserState["status"] => selectUserState(state).status;
