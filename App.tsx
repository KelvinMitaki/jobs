import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
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
LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens"
]);
const BottomTabNavigator = createBottomTabNavigator({
  Map: createStackNavigator({ Map: MapScreen }),
  Deck: createStackNavigator({ Deck: DeckScreen }),
  Review: createStackNavigator({
    Review: ReviewScreen,
    Settings: SettingsScreen
  })
});
const SwitchNavigator = createSwitchNavigator({
  Initial: createBottomTabNavigator({
    Welcome: WelcomeScreen,
    Auth: AuthScreen
  }),
  Main: BottomTabNavigator
});

const App = createAppContainer(SwitchNavigator);

export default () => <App />;
