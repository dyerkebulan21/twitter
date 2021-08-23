import produce, {Draft} from 'immer'
import { TweetActions,TweetActionType } from './actionCreators'
import { TweetState, LoadingStatus, } from './contracts/state'


const initialState: TweetState = {
    data: undefined,
    LoadingStatus: LoadingStatus.NEVER
}


export const tweetReducer = produce((draft:Draft<TweetState>, action: TweetActions) => {
   
    switch(action.type) {
        case TweetActionType.SET_DATA: 
            //@ts-ignore
            draft.data = action.payload
            draft.LoadingStatus = LoadingStatus.LOADED
            break 
        case TweetActionType.FETCH_DATA: 
            draft.data = undefined;
            draft.LoadingStatus = LoadingStatus.LOADING
            break
        case TweetActionType.LOADING_DATA: 
            draft.LoadingStatus = action.payload
            break 
        default: 
            break;
    }
  
}, initialState)