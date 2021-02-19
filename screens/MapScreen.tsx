import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
