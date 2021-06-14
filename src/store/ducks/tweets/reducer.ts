import produce, {Draft} from 'immer'
import { TweetsActions,TweetsActionType } from './actionCreators'
import { TweetsState, LoadingState, addFormState } from './contracts/state'


const initialState: TweetsState = {
    items: [],
    addFormState: addFormState.NEVER,
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
        case TweetsActionType.SET_ADD_FORM_STATE: 
            draft.addFormState = addFormState.ERROR
            break 
        case TweetsActionType.FETCH_ADD_TWEET: 
            draft.addFormState = addFormState.LOADING
            break 
        case TweetsActionType.ADD_TWEET: 
            draft.items.push(action.payload)
            draft.addFormState = addFormState.NEVER
            break
        default: 
            break;
    }
  
}, initialState)