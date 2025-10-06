import Button from "@/components/ui/Button";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "@/hooks/useAuth";

const ProfileTabScreen = () => {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Profile Tab</Text>
      <Button
        label="Logout"
        className=""
        indicatorColor="white"
        onPress={() => logout()}
      />
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

export default ProfileTabScreen;
