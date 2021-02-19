import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  HeaderButton,
  HeaderButtons,
  Item
} from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const ReviewScreen: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Text>ReviewScreen ReviewScreen</Text>
    </View>
  );
};
ReviewScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Review Jobs",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={props => <HeaderButton {...props} />}>
      <Item title="Settings" onPress={() => navigation.navigate("Settings")} />
    </HeaderButtons>
  )
});
export default ReviewScreen;

const styles = StyleSheet.create({});
