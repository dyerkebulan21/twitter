import produce, {Draft} from 'immer'
import { TagsActions,TagsActionType } from './actionCreators'
import { TagsState, LoadingState } from './contracts/state'


const initialState: TagsState = {
    items: [],
    loadingState: LoadingState.NEVER
}


export const tagsReducer = produce((draft:Draft<TagsState>, action: TagsActions) => {
   
    switch(action.type) {
        case TagsActionType.SET_TAGS: 
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break 
        case TagsActionType.FETCH_TAGS: 
            draft.items = [];
            draft.loadingState = LoadingState.LOADING
            break
        case TagsActionType.LOADING_TAGS: 
            draft.loadingState = action.payload
            break 
        default: 
            break;
    }
  
}, initialState)