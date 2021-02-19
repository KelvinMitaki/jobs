import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { WrappedFieldProps } from "redux-form";

const InputComponent: React.FC<WrappedFieldProps> = ({
  input: { value, ...input },
  meta
}) => {
  return (
    <View>
      <Input
        {...input}
        onChangeText={e => input.onChange(e)}
        onFocus={e => input.onFocus((e as unknown) as React.FocusEvent)}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
