import QuickActionItem from "@/entities/QuickActionItem";
import React from "react";
import { StyleSheet, View } from "react-native";

const actions = [
  { name: "Travel", logo: require("../assets/images/travel.png") },
  { name: "Delivery", logo: require("../assets/images/delivery.png") },
  { name: "Bonuses", logo: require("../assets/images/bonuses.png") },
  { name: "Support", logo: require("../assets/images/support.png") },
];

const QuickActionsBar: React.FC = () => {
  return (
    <View style={styles.quickActionsBar}>
      {actions.map((item) => (
        <QuickActionItem key={item.name} name={item.name} logo={item.logo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  quickActionsBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
});

export default QuickActionsBar;
