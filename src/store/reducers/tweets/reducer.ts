import produce from 'immer'
import { TweetsState, LoadingState } from './contracts/state'


export const initialState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
}