import produce, {Draft} from 'immer'
import { TweetActions,TweetActionType } from './actionCreators'
import { TweetState, LoadingState, } from './contracts/state'


const initialState: TweetState = {
    data: undefined,
    loadingState: LoadingState.NEVER
}


export const tweetReducer = produce((draft:Draft<TweetState>, action: TweetActions) => {
   
    switch(action.type) {
        case TweetActionType.SET_DATA: 
            //@ts-ignore
            draft.data = action.payload
            draft.loadingState = LoadingState.LOADED
            break 
        case TweetActionType.FETCH_DATA: 
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING
            break
        case TweetActionType.LOADING_DATA: 
            draft.loadingState = action.payload
            break 
        default: 
            break;
    }
  
}, initialState)