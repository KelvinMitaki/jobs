import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Button } from "react-native-elements";
import { NavigationRoute, NavigationScreenConfig } from "react-navigation";
import {
  NavigationStackScreenComponent,
  NavigationStackScreenProps
} from "react-navigation-stack";
import {
  StackNavigationOptions,
  StackNavigationProp
} from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useSelector } from "react-redux";
import validator from "validator";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import InputComponent from "../components/Input";
import { Redux } from "../interfaces/Redux";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import axios from "axios";

interface FormValues {
  email: string;
  password: string;
}

const AuthScreen: React.FC<
  NavigationStackScreenProps & InjectedFormProps<FormValues>
> & {
  navigationOptions?: NavigationScreenConfig<
    StackNavigationOptions,
    StackNavigationProp<
      NavigationRoute,
      {
        headerTitle?: "Sign In" | "Sign Up";
      }
    >
  >;
} = ({ navigation, valid }) => {
  const { form } = useSelector((state: Redux) => state);
  const [auth, setAuth] = useState<"signin" | "signup">("signin");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    navigation.setParams({
      headerTitle: auth === "signin" ? "Sign In" : "Sign Up"
    });
  }, [auth]);
  const authenticate = async () => {
    try {
      setError(null);
      setLoading(true);
      const { data } = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${
          auth === "signin" ? "signInWithPassword" : "signUp"
        }?key=${process.env.EXPO_API_KEY}`,
        {
          ...form.AuthScreen.values,
          returnSecureToken: true
        }
      );
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setLoading(false);
      auth === "signin"
        ? setError("Invalid email or password")
        : setError("Email already in use");
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ height: "100%" }}
    >
      <ScrollView contentContainerStyle={styles.auth}>
        <KeyboardAvoidingView behavior="padding">
          <Field name="email" placeholder="Email" component={InputComponent} />
          <Field
            name="password"
            placeholder="Password"
            component={InputComponent}
          />
          <Button
            title="Submit"
            onPress={authenticate}
            containerStyle={{ marginHorizontal: "5%" }}
            disabled={!valid}
            loading={loading}
          />
          <Button
            title={
              auth === "signin" ? "Switch to sign up" : "Switch to sign in"
            }
            onPress={() => {
              setError(null);
              setAuth(a => (a === "signin" ? "signup" : "signin"));
            }}
            containerStyle={{ marginHorizontal: "5%", marginTop: 20 }}
            type="outline"
          />
          {error && <Text style={styles.error}>{error}</Text>}
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

AuthScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam("headerTitle")
  };
};

const validate = (formValues: FormValues) => {
  const errors = {} as FormValues;
  const { email, password } = formValues;
  if (!email || (email && !validator.isEmail(email))) {
    errors.email = "Please enter a valid email";
  }
  if (!password || (password && password.length < 6)) {
    errors.password = "Password must be six characters minimum";
  }
  return errors;
};

export default reduxForm<
  FormValues,
  NavigationStackScreenProps & InjectedFormProps<FormValues>
>({
  form: "AuthScreen",
  validate
  // @ts-ignore
})(AuthScreen);

const styles = StyleSheet.create({
  auth: {
    justifyContent: "center",
    flex: 1,
    marginBottom: "25%"
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  }
});
