import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Fonts} from "@/app/_layout";

const progressItems = [
  { percent: 0.37, backgroundColor: "#CC3F02" },
  { percent: 0.25, backgroundColor: "#FE5900" },
  { percent: 0.22, backgroundColor: "#FF9332" },
  { percent: 0.16, backgroundColor: "#FFD8A5" },
];

interface ExpensesProgressBarProps {
  spent: number;
  budget: number;
  month: string;
}

export default function ExpensesProgressBar({
  spent = 5091,
  budget = 8000,
  month = "June",
}: ExpensesProgressBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Expenses in <Text style={styles.month}>{month}</Text>
        </Text>
        <Text style={styles.amount}>${spent.toLocaleString()}</Text>
      </View>
      <View style={styles.expensesProgressBar}>
        {progressItems.map((item, idx) => (
          <View
            key={idx}
            style={[
              styles.line,
              { flex: item.percent, backgroundColor: item.backgroundColor },
            ]}
          ></View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 24 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  title: {
    color: "white",
    fontSize: 21,
    fontWeight: "500",
    fontFamily: Fonts.Inter_Medium,
  },
  month: { color: "#FF8D00" },
  amount: {
    color: "#AEAEAE",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: Fonts.Inter_Regular,
  },
  expensesProgressBar: { flexDirection: "row", gap: 3, width: "100%" },
  line: { height: 8, borderRadius: 3 },
});
