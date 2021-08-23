import produce, { Draft } from "immer";
import { LoadingStatus } from "../../../types";
import { TweetsActions, TweetsActionType } from "./actionCreators";
import { TweetsState, addFormState } from "./contracts/state";

const initialState: TweetsState = {
  items: [],
  addFormState: addFormState.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetsActionType.SET_TWEETS:
        draft.items = action.payload;
        draft.LoadingStatus = LoadingStatus.LOADED;
        break;
      case TweetsActionType.FETCH_TWEETS:
        draft.items = [];
        draft.LoadingStatus = LoadingStatus.LOADING;
        break;
      case TweetsActionType.LOADING_TWEETS:
        draft.LoadingStatus = action.payload;
        break;
      case TweetsActionType.SET_ADD_FORM_STATE:
        draft.addFormState = addFormState.ERROR;
        break;
      case TweetsActionType.FETCH_ADD_TWEET:
        draft.addFormState = addFormState.LOADING;
        break;
      case TweetsActionType.ADD_TWEET:
        draft.items.splice(0, 0, action.payload);
        draft.addFormState = addFormState.NEVER;
        break;
      default:
        break;
    }
  },
  initialState
);
