import Header from "@/widgets/Header";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Chats" routeName="chats" />
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

export default Chats;
