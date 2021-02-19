import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { NavigationSwitchScreenComponent } from "react-navigation";
import { Authenticate } from "./AuthScreen";

const StartScreen: NavigationSwitchScreenComponent = ({ navigation }) => {
  useEffect(() => {
    const auth = async () => {
      try {
        let data = await AsyncStorage.getItem("auth");
        if (data) {
          data = JSON.parse(data);
          await axios.get(
            `https://jobs-ab884-default-rtdb.firebaseio.com/products.json?auth=${
              ((data as unknown) as Authenticate["payload"]).token
            }`
          );
          navigation.navigate("Main");
        } else {
          navigation.navigate("Welcome");
        }
      } catch (error) {
        navigation.navigate("Welcome");
      }
    };
    auth();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
