import produce, { Draft } from "immer";
import { LoadingState } from "../tweets/contracts/state";
import { UserActions } from "./actionCreators";
import { UserActionsType } from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

const initialState: UserState = {
  data: undefined,
  status: LoadingState.NEVER,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
      case UserActionsType.SET_USER_DATA:
        draft.data = action.payload;
        draft.status = LoadingState.LOADED;
        break;
      //@ts-ignore
      case UserActionsType.SET_LOADING_STATE:
        draft.status = action.payload;
        break;
      default:
        break;
    }
  },
  initialState
);
