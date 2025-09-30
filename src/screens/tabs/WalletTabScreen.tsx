import { Input } from "@/src/components/ui/Input";
import Button from "@/src/components/ui/Button";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const WalletTabScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <View className="flex-1 bg-white items-center justify-center">
        <Text className="text-orange-500 text-lg font-bold">
          Welcome to Wallet Tabs
        </Text>
        <Input label="Email" placeholder="Enter Email" />
        <Button label="Sign In" indicatorColor="white" />
      </View>
    </SafeAreaView>
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

export default WalletTabScreen;
