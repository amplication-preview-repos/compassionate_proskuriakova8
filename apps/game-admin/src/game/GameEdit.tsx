import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const GameEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="enabled" source="enabled" />
        <TextInput label="name" source="name" />
        <TextInput label="slug" source="slug" />
      </SimpleForm>
    </Edit>
  );
};
