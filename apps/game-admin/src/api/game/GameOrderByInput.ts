import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  updatedAt?: SortOrder;
};
