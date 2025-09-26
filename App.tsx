import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigator from "@/navigations/RootStackNavigator";

//ONLY CONTEXT PROVIDERS WILL BE ADDED HERE NO OTHER NAVIGATION SHOULD COME IN HERE
// Root component for the app
export default function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
