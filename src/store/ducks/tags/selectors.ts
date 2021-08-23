
import { createSelector } from "reselect";
import { RootState } from "./actionCreators";
import { LoadingStatus, TagsState } from "./contracts/state";

export const selectTags = (state: RootState): TagsState => state.tags

export const selectTagsLoading = (state: RootState):LoadingStatus => selectTags(state).LoadingStatus

export const selectIsTagsLoading = (state: RootState): boolean => selectTagsLoading(state) === LoadingStatus.LOADING

export const selectIsTagsLoaded = (state: RootState): boolean => selectTagsLoading(state) === LoadingStatus.LOADED

export const selectedTagsItem = createSelector(selectTags, (tags) => tags.items)