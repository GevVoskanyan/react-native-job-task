import Header from "@/widgets/Header";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Payments() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Payments" routeName="payments" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#060503",
  },
});
