import produce, {Draft} from 'immer'
import { TweetsActions,TweetsActionType } from './actionCreators'
import { TweetsState, LoadingState } from './contracts/state'


const initialState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}


export const tweetsReducer = produce((draft:Draft<TweetsState>, action: TweetsActions) => {
    const{type, payload} = action 
    if(type === TweetsActionType.SET_TWEETS) {
        draft.items = payload
    }
}, initialState)