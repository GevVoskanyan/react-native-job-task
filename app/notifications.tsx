import NotificationItem from "@/entities/NotificationItem";
import Header from "@/widgets/Header";
import React, { useMemo, useState } from "react";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Fonts} from "@/app/_layout";

const notificationsData = [
  {
    id: "1",
    title: "Received from Anna",
    description: "Debit •• 4385",
    day: "Today",
    date: "17 June",
    time: " 17:49",
    type: "Payments",
    src: require("../assets/images/user-avatar.png"),
    amount: "$110",
    balance: "4,098.12",
  },
  {
    id: "2",
    title: "See our limited offer!",
    description: "Would you like to visit new countries? Maybe it’s your time!",
    day: "Yesterday",
    date: "16 June",
    time: "23:08",
    type: "Travel",
    src: require("../assets/images/travel.png"),
  },
  {
    id: "3",
    title: "Sent to •• 2041",
    description: "Debit •• 4385",
    day: "Yesterday",
    date: "16 June",
    time: "06:18",
    type: "Transfer",
    src: require("../assets/images/transfer.png"),
    amount: "-$14.62",
    balance: "$3,987.5",
  },
  {
    id: "3",
    title: "New login into account",
    description: "You have logged in from a new location: iOS 26.0.1 - Spain",
    day: "",
    date: "24 March, 2025 ",
    time: "15:44",
    type: "System",
    src: require("../assets/images/secure.png"),
  },
];

const tabs = ["All", "Payments", "System", "Delivery", "Travel"];

function Notifications() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredNotifications = useMemo(() => {
    return activeTab === "All"
      ? notificationsData
      : notificationsData.filter((n) => n.type === activeTab);
  }, [activeTab]);

  const sections = useMemo(() => {
    const map: Record<string, typeof notificationsData> = {};
    filteredNotifications.forEach((item) => {
      const key = item.day ? `${item.day}, ${item.date}` : item.date;
      if (!map[key]) map[key] = [];
      map[key].push(item);
    });
    return Object.entries(map).map(([title, data]) => ({ title, data }));
  }, [filteredNotifications]);

  return (
    <SafeAreaView style={styles.container}>
      <Header routeName="notifications" title="Notifications" />
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <Pressable key={tab} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tab, activeTab === tab && styles.activeTab]}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 16, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#060503" },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1F1F1F",
  },
  tab: {
    color: "gray",
    fontWeight: "400",
    fontSize: 14,
    fontFamily: Fonts.Inter_Regular,
  },
  activeTab: {
    color: "#FF6C00",
    borderBottomWidth: 2,
    borderBottomColor: "#FF6C00",
    paddingBottom: 4,
  },
  sectionHeader: {
    color: "#AEAEAE",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: Fonts.Inter_Medium,
    marginTop: 16,
    marginBottom: 8,
  },
});

export default Notifications;
