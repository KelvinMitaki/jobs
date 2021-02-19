import React from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { NavigationInjectedProps, withNavigation } from "react-navigation";

interface Props {
  SLIDE_DATA: {
    text: string;
    color: string;
  }[];
}

const Slides: React.FC<Props & NavigationInjectedProps> = ({
  SLIDE_DATA,
  navigation
}) => {
  return (
    <ScrollView horizontal style={{ height: "100%" }} pagingEnabled>
      {SLIDE_DATA.map((sl, i) => (
        <View
          key={sl.text}
          style={{ ...styles.slide, backgroundColor: sl.color }}
        >
          <Text style={styles.slideText}>{sl.text}</Text>
          {SLIDE_DATA.length - 1 === i && (
            <Button
              title="Onwards!"
              onPress={() => navigation.navigate("Auth")}
              raised
              containerStyle={styles.btn}
              buttonStyle={{ paddingHorizontal: 20 }}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default withNavigation<Props>(Slides);

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
  },
  btn: {
    backgroundColor: "#0288d1",
    marginTop: 20
  }
});
