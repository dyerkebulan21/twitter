export enum LoadingState {
    LOADED = "LOADED",
    ERROR ="ERROR",
    NEVER = "NEVER",
    LOADING = "LOADING"
}

export interface Tweet {
    text: string,
    _id: number,
}

export interface TweetState {
    data?: Tweet,
    loadingState: LoadingState
}