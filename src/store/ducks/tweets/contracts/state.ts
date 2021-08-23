import { LoadingStatus } from "../../../../types";

export enum addFormState {
  ERROR = "ERROR",
  NEVER = "NEVER",
  LOADING = "LOADING",
}

export interface Tweet {
  text: string;
  _id: number;
  createdAt: string;
  user: {
    username: string;
    fullname: string;
    avatarUrl: string;
  };
}

export interface TweetsState {
  items: Tweet[];
  LoadingStatus: LoadingStatus;
  addFormState: addFormState;
}
