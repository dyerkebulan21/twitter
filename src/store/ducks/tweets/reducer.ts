import produce, {Draft} from 'immer'
import { TweetsState, LoadingState } from './contracts/state'


const initialState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}


export const tweetsReducer = produce((draft:Draft<TweetsState>, action: any) => {

}, initialState)