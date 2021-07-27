export enum LoadingState {
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER = "NEVER",
  LOADING = "LOADING",
}

export enum addFormState {
  ERROR = "ERROR",
  NEVER = "NEVER",
  LOADING = "LOADING",
}

export interface Tweet {
  text: string;
  _id: number;
  user: {
    username: string;
    fullname: string;
    avatarUrl: string;
  };
}

export interface TweetsState {
  items: Tweet[];
  loadingState: LoadingState;
  addFormState: addFormState;
}
