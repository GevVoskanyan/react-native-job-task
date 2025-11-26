import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {Fonts} from "@/app/_layout";

interface QuickActionItemProps {
  name: string;
  logo: any;
}

const QuickActionItem: React.FC<QuickActionItemProps> = ({ name, logo }) => {
  return (
    <View style={styles.quickActionItem}>
      <Image style={styles.quickActionLogo} source={logo} />
      <Text style={styles.quickActionName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  quickActionItem: {
    alignItems: "center",
  },
  quickActionLogo: {
    width: 24,
    height: 24,
    objectFit: "cover",
    marginBottom: 10,
  },
  quickActionName: {
    color: "white",
    fontSize: 14,
    fontFamily: Fonts.Inter_Medium,
  },
});

export default QuickActionItem;
