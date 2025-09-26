import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SessionsTabScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to Sessions Tab
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: 700,
    color: "purple",
  },
});

export default SessionsTabScreen;
