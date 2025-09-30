import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardTabs from "./DashboardNavigator";
import AuthScreens from "./AuthNavigator";

/** Root parameter list */ // OTHER NAVIGATION STACKS WILL BE ADDED HERE
export type RootStackParamList = {
  AuthStack: undefined;
  DashboardStack: undefined;
  //Global stacks will be added too
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(false); 
    }, 2000);
  }, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Dashboard screens and global should only available when user is login */}
      {isAuthenticated ? (
        <RootStack.Screen name="DashboardStack" component={DashboardTabs} />
      ) : (
        <RootStack.Screen name="AuthStack" component={AuthScreens} />
      )}

      {/* Global navigation routes  will be added here. The above will be rendered conditionally*/}
    </RootStack.Navigator>
  );
}
