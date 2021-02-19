import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
const AuthScreen: NavigationStackScreenComponent<{
  headerTitle?: "Sign In" | "Sign Up";
}> = ({ navigation }) => {
  const [auth, setAuth] = useState<"signin" | "signup">("signin");
  useEffect(() => {
    navigation.setParams({
      headerTitle: auth === "signin" ? "Sign In" : "Sign Up"
    });
  }, [auth]);
  return (
    <View>
      <Text>AuthScreen AuthScreen</Text>
    </View>
  );
};

AuthScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam("headerTitle")
  };
};

export default AuthScreen;

const styles = StyleSheet.create({});
