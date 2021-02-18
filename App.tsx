import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SettingsScreen from "./screens/SettingsScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
enableScreens();

const StackNavigator = createStackNavigator({
  Settings: SettingsScreen
});
const BottomTabNavigator = createBottomTabNavigator({
  Map: MapScreen,
  Deck: DeckScreen,
  Review: ReviewScreen,
  Settings: StackNavigator
});
const SwitchNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  Welcome: WelcomeScreen,
  Main: BottomTabNavigator
});

const App = createAppContainer(SwitchNavigator);

export default () => <App />;
