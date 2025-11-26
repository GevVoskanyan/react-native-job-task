import Header from "@/widgets/Header";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Analytics = () => {
  return (
    <SafeAreaView style={styles.analyticsContainer}>
      <Header title="Analytics" routeName="analytics" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  analyticsContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#060503",
  },
  title: {
    color: "#fff",
    fontSize: 21,
  },
});

export default Analytics;
