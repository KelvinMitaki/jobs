import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  SLIDE_DATA: {
    text: string;
  }[];
}

const Slides: React.FC<Props> = ({ SLIDE_DATA }) => {
  return (
    <ScrollView horizontal style={{ height: "100%" }}>
      {SLIDE_DATA.map(sl => (
        <View key={sl.text} style={styles.slide}>
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
    justifyContent: "center"
  },
  slideText: {
    fontSize: 30
  }
});
