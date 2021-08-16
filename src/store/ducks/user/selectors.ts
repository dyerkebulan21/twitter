
import { createSelector } from "reselect";
import { RootState } from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

export const selectUserData = (state: RootState): UserState => state.user


export const selectUserLoadingStatus = (state: RootState): UserState['status'] => state.user.status