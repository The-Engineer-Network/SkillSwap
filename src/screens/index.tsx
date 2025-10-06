import React from 'react';
import { View, StatusBar, StyleSheet, Text } from "react-native";

export default function DashBoardScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: 700 }}>
        Hello World from SkillSwap React Native Team!
      </Text>
    </View>
  );
}

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
