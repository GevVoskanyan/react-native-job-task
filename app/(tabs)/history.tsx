import Header from "@/widgets/Header";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="History" routeName="history" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#060503",
  },
});
export default History;
