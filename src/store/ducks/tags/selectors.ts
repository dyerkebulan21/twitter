
import { createSelector } from "reselect";
import { RootState } from "./actionCreators";
import { LoadingState, TagsState } from "./contracts/state";

export const selectTags = (state: RootState): TagsState => state.tags

export const selectTagsLoading = (state: RootState):LoadingState => selectTags(state).loadingState

export const selectIsTagsLoading = (state: RootState): boolean => selectTagsLoading(state) === LoadingState.LOADING

export const selectIsTagsLoaded = (state: RootState): boolean => selectTagsLoading(state) === LoadingState.LOADED

export const selectedTagsItem = createSelector(selectTags, (tags) => tags.items)