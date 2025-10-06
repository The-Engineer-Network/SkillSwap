import React from 'react';
import { View, Text } from 'react-native';

interface TransactionItemProps {
  title: string;
  date: string;
  amount: number;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ title, date, amount }) => {
  const isPositive = amount > 0;
  const sign = isPositive ? '+' : '-';
  const color = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <View className="flex-row items-center justify-between py-3 px-4 bg-gray-50 rounded-lg mx-4 my-1">
      <View className="flex-row items-center">
        <View className="w-8 h-8 bg-purple-200 rounded-full items-center justify-center mr-3">
          <Text className="text-purple-600 font-bold">{sign}</Text>
        </View>
        <View>
          <Text className="text-gray-900 font-medium">{title}</Text>
          <Text className="text-gray-500 text-sm">{date}</Text>
        </View>
      </View>
      <Text className={`font-bold text-lg ${color}`}>{sign}{Math.abs(amount)}</Text>
    </View>
  );
};

export default TransactionItem;