import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import BalanceCard from "@/components/BalanceCard";
import TransactionItem from "@/components/TransactionItem";

const sampleTransactions = [
  { id: '1', title: 'SkillSwap Session', date: 'July 15, 2024', amount: 2 },
  { id: '2', title: 'SkillSwap Session', date: 'July 14, 2024', amount: -5 },
  { id: '3', title: 'SkillSwap Session', date: 'July 13, 2024', amount: 3 },
  { id: '4', title: 'Referral Bonus', date: 'July 12, 2024', amount: -2 },
  { id: '5', title: 'Course Material Purchase', date: 'July 11, 2024', amount: 1 },
];

const WalletTabScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header */}
        <View className="items-center py-6 mt-4">
          <Text className="text-2xl font-bold text-purple-700">Wallet</Text>
        </View>

        {/* Balance Card */}
        <BalanceCard balance={12} />

        {/* Transaction History */}
        <View className="flex-1 px-4 pb-20">
          <Text className="text-lg font-semibold text-gray-900 mb-3">Transaction History</Text>
          <FlatList
            data={sampleTransactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TransactionItem
                title={item.title}
                date={item.date}
                amount={item.amount}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentInset={{ bottom: 20 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletTabScreen;
