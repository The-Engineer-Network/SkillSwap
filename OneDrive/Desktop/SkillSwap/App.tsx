import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigations/RootStackNavigator";
import AuthProvider from "@/contexts/AuthContext";

//ONLY CONTEXT PROVIDERS WILL BE ADDED HERE NO OTHER NAVIGATION SHOULD COME IN HERE
// Root component for the app
export default function App(): React.ReactElement {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
