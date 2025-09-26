import { createStackNavigator } from "@react-navigation/stack";

import DashboardTabs from "./DashboardNavigator";

/** Root parameter list */// OTHER NAVIGATION STACKS WILL BE ADDED HERE
export type RootStackParamList = {
  AuthStack: undefined;
  DashboardStack: undefined;
  //Global stacks will be added too
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* Dashboard screens and global should only available when user is login */}
      <RootStack.Screen name="DashboardStack" component={DashboardTabs} />
      {/* Global navigation routes  will be added here. The above will be rendered conditionally*/}
    </RootStack.Navigator>
  );
}
