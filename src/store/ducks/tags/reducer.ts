import produce, {Draft} from 'immer'
import { TagsActions,TagsActionType } from './actionCreators'
import { TagsState, LoadingStatus } from './contracts/state'


const initialState: TagsState = {
    items: [],
    LoadingStatus: LoadingStatus.NEVER
}


export const tagsReducer = produce((draft:Draft<TagsState>, action: TagsActions) => {
   
    switch(action.type) {
        case TagsActionType.SET_TAGS: 
            draft.items = action.payload
            draft.LoadingStatus = LoadingStatus.LOADED
            break 
        case TagsActionType.FETCH_TAGS: 
            draft.items = [];
            draft.LoadingStatus = LoadingStatus.LOADING
            break
        case TagsActionType.LOADING_TAGS: 
            draft.LoadingStatus = action.payload
            break 
        default: 
            break;
    }
  
}, initialState)