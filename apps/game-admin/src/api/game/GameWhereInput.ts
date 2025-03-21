import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GameWhereInput = {
  enabled?: BooleanFilter;
  id?: StringFilter;
  name?: StringFilter;
  slug?: StringNullableFilter;
};
