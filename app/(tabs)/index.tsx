import Card from "@/entities/Card";
import ExpensesProgressBar from "@/entities/ExpensesProgressBar";
import TransactionItem from "@/entities/TransactionItem";
import Header from "@/widgets/Header";
import QuickActionsBar from "@/widgets/QuickActionsBar";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Fonts} from "@/app/_layout";

const transactions = [
  {
    id: "1",
    name: "Matthew Billson",
    type: "Money Transfer",
    amount: 56.19,
    date: "Jun 9, 12:08",
    day: "today",
    src: require("../../assets/images/money-transfer.png"),
    typeColor: "#CC3F02",
  },
  {
    id: "2",
    name: "Starbucks",
    type: "Food",
    amount: 122.47,
    date: "Jun 8, 19:21",
    day: "yesterday",
    src: require("../../assets/images/starbucks.png"),
    typeColor: "#FE5900",
  },
  {
    id: "3",
    name: "Netflix",
    type: "Entertainment",
    amount: 13.17,
    date: "Jun 8, 08:53",
    day: "yesterday",
    src: require("../../assets/images/netflix.png"),
    typeColor: "#FF9332",
  },
];

const sections = [
  {
    title: "Today",
    data: transactions.filter((t) => t.day === "today"),
  },
  {
    title: "Yesterday",
    data: transactions.filter((t) => t.day === "yesterday"),
  },
];

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Header routeName="index" title="Charlotte" />
      <QuickActionsBar />
      <View style={styles.content}>
        <View style={styles.cards}>
          <Card type="Debit" balance={4098.12} last4="4385" />
          <Card type="Virtual" balance={14.71} last4="9081" />
          <Pressable style={styles.addCardBtn}>
            <AntDesign
              style={styles.addCardBtnIcon}
              name="plus"
              size={24}
              color="white"
            />
          </Pressable>
        </View>
        <ExpensesProgressBar spent={5091} budget={8000} month="June" />
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionItem {...item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#060503" },
  content: { paddingHorizontal: 16, flex: 1 },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  addCardBtn: {
    height: "auto",
    borderRadius: 16,
    padding: 12,
    backgroundColor: "#0F0F0F",
  },
  addCardBtnIcon: { marginVertical: "auto" },
  sectionHeader: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: Fonts.Inter_Medium,
    marginTop: 16,
    marginBottom: 6,
  },
});
