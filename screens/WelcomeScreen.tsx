import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Wecome to Jobs" },
  { text: "Use This To Get A Job" },
  { text: "Set Your Location Then Swipe Away" }
];

const WelcomeScreen = () => {
  return (
    <View>
      <Slides SLIDE_DATA={SLIDE_DATA} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
