import {Action} from 'redux'
import { LoadingStatus, TagsState } from "./contracts/state";

export enum TagsActionType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    LOADING_TAGS = 'tags/LOADING_TAGS',
    
}

export interface SetTagsActionInterface extends Action<TagsActionType> {
    type: TagsActionType.SET_TAGS,
    payload: TagsState['items']
}

export interface SetTagsLoadingActionInterface extends Action<TagsActionType> {
    type: TagsActionType.LOADING_TAGS,
    payload: LoadingStatus
}


export interface FetchTagsActionInterface extends Action<TagsActionType> {
    type: TagsActionType.FETCH_TAGS,
 
}
export const fetchTags = (): FetchTagsActionInterface => ({
    type: TagsActionType.FETCH_TAGS,
    
})

export interface RootState {
    tags: TagsState
}

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
    type: TagsActionType.SET_TAGS,
    payload
})

export const setLoadingTags = (payload: LoadingStatus): SetTagsLoadingActionInterface => ({
    type: TagsActionType.LOADING_TAGS,
    payload
})



export type TagsActions = SetTagsActionInterface | SetTagsLoadingActionInterface | FetchTagsActionInterface