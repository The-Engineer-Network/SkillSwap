import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { AuthStackParamList } from "@/navigations/AuthNavigator";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "Login"
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-[#f7f6f8]">
      <View className="flex-1 justify-between">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full px-6 justify-center flex-1">
            <View className="items-center">
              <View className="w-20 h-20 rounded-full bg-purple-200 items-center justify-center mb-6">
                <View
                  className="w-14 h-14 rounded-full"
                  style={{
                    backgroundColor: "#7c3aed",
                    shadowColor: "#7c3aed",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                  }}
                />
              </View>

              <Text className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to SkillSwap
              </Text>
              <Text className="text-gray-500 text-base">
                Learn, share, and grow with your peers.
              </Text>
            </View>

            <View>
              <Input
                label=""
                placeholder="Email address"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Input
                label=""
                placeholder="Password"
                showPasswordToggle
                secureTextEntry
              />

              <View className="mt-12 gap-4">
                <Button
                  label="Sign Up"
                  className=""
                  indicatorColor="white"
                  onPress={() => navigation.navigate("Register")}
                />

                <Button
                  label="Log In"
                  className=""
                  indicatorColor="#7c3aed"
                  variant="secondary"
                  onPress={() => console.log("Log In pressed")}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View className="px-6 pb-6">
          <Text className="text-center text-gray-500 text-xs leading-5">
            By continuing, you agree to our{" "}
            <TouchableOpacity onPress={() => console.log("Terms")}>
              <Text className="text-purple-600 underline">
                Terms of Service
              </Text>
            </TouchableOpacity>{" "}
            and{" "}
            <TouchableOpacity onPress={() => console.log("Services")}>
              <Text className="text-purple-600 underline">Privacy Policy</Text>
            </TouchableOpacity>
            .
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
