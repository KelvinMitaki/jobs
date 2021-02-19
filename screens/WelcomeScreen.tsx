import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Wecome to Jobs. Swipe To Continue", color: "#0389f4" },
  { text: "Use This To Get A Job", color: "#009688" },
  { text: "Set Your Location Then Swipe Away", color: "#03a9f4" }
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
