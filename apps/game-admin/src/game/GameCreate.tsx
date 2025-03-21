import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const GameCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="enabled" source="enabled" />
        <TextInput label="name" source="name" />
        <TextInput label="slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};
