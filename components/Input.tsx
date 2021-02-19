import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { WrappedFieldProps } from "redux-form";

interface Props {
  placeholder: string;
}

const InputComponent: React.FC<WrappedFieldProps & Props> = ({
  input: { value, ...input },
  meta,
  ...props
}) => {
  return (
    <View>
      <Input
        {...input}
        onChangeText={e => input.onChange(e)}
        onFocus={e => input.onFocus((e as unknown) as React.FocusEvent)}
        placeholder={props.placeholder}
        keyboardType={input.name === "email" ? "email-address" : "default"}
        secureTextEntry={input.name === "password"}
        errorMessage={meta.touched && meta.error ? meta.error : ""}
        errorStyle={{ fontSize: 15, fontWeight: "bold" }}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
