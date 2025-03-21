import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const GameList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Games"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
