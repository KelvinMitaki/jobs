import React from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";

interface Props {
  SLIDE_DATA: {
    text: string;
    color: string;
  }[];
}

const Slides: React.FC<Props> = ({ SLIDE_DATA }) => {
  return (
    <ScrollView horizontal style={{ height: "100%" }} pagingEnabled>
      {SLIDE_DATA.map(sl => (
        <View
          key={sl.text}
          style={{ ...styles.slide, backgroundColor: sl.color }}
        >
          <Text style={styles.slideText}>{sl.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Slides;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  slideText: {
    fontSize: 30,
    textAlign: "center",
    color: "white"
  }
});
