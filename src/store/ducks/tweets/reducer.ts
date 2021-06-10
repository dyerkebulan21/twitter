import produce, {Draft} from 'immer'
import { TweetsActions,TweetsActionType } from './actionCreators'
import { TweetsState, LoadingState } from './contracts/state'


const initialState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}


export const tweetsReducer = produce((draft:Draft<TweetsState>, action: TweetsActions) => {
   
    switch(action.type) {
        case TweetsActionType.SET_TWEETS: 
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break 
        case TweetsActionType.FETCH_TWEETS: 
            draft.items = [];
            draft.loadingState = LoadingState.LOADING
            break
        case TweetsActionType.LOADING_TWEETS: 
            draft.loadingState = action.payload
            break 
        case TweetsActionType.ADD_TWEET: 
            draft.items.push(action.payload)
            break 
        default: 
            break;
    }
  
}, initialState)