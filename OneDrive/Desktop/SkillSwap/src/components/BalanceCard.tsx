import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface BalanceCardProps {
  balance: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance }) => {
  return (
    <View className="rounded-lg mx-4 my-4 overflow-hidden">
      <LinearGradient
        colors={['#6B28FFCC', '#6B28FFFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="p-6"
      >
        <Text className="text-white text-sm font-medium mb-2">CURRENT BALANCE</Text>
        <Text className="text-white text-4xl font-bold">{balance}</Text>
        <Text className="text-white text-lg">Credits</Text>
      </LinearGradient>
    </View>
  );
};

export default BalanceCard;