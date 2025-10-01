import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import ExploreTabScreen from "@/screens/tabs/ExploreTabScreen";
import SessionsTabScreen from "@/screens/tabs/SessionsTabScreen";
import WalletTabScreen from "@/screens/tabs/WalletTabScreen";
import ProfileTabScreen from "@/screens/tabs/ProfileTabScreen";



export type DashboardTabParamList = {
  Explore: undefined;
  Sessions: undefined;
  Wallet: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<DashboardTabParamList>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabelStyle: { fontSize: 12 },
  tabBarActiveTintColor: "#434ae1ff",
  tabBarInactiveTintColor: "#777",
};

const DashboardTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Explore"
        component={ExploreTabScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="search-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sessions"
        component={SessionsTabScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="calendar-clear-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletTabScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTabScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardTabs;
