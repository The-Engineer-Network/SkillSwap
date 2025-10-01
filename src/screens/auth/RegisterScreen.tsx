import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

const RegisterScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#f7f6f8]">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full px-6 justify-center items-center flex-1">
          <Text>Register Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
