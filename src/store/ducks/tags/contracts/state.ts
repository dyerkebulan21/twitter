import { LoadingStatus } from "../../../../types";

export interface Tag {
  name: string;
  count: number;
  _id: number;
}

export interface TagsState {
  items: Tag[];
  LoadingStatus: LoadingStatus;
}
