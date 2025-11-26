import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue, Image, StyleSheet, Text, View } from "react-native";
import {Fonts} from "@/app/_layout";

interface CardProps {
  type: "Debit" | "Virtual";
  balance: number;
  last4: string;
}

const Card: React.FC<CardProps> = ({ type, balance, last4 }) => {
  const gradientColor: readonly [ColorValue, ColorValue, ...ColorValue[]] =
    type === "Virtual"
      ? ["rgba(225, 225, 225, 0.7)", "rgba(121, 121, 121, 1)"]
      : ["rgba(255,137,0,0.9)", "rgba(245,68,0,0.9)"];

  return (
    <LinearGradient
      colors={gradientColor}
      style={styles.card}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0.9, y: 1 }}
    >
      <View style={styles.cardIconContainer}>
        <Image source={require("../assets/images/card-icon.png")} />
      </View>
      <View>
        <Text style={styles.balance}>${balance.toFixed(2)}</Text>
      </View>
      <View style={styles.cardNums}>
        <Text style={styles.cardType}>{type}</Text>
        <Text style={styles.cardType}>•• {last4}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 120,
    borderRadius: 16,
    padding: 12,
    marginRight: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  balance: {
    color: "white",
    fontSize: 18,
    fontFamily: Fonts.Inter_SemiBold,
  },
  cardType: {
    color: "white",
    fontSize: 14,
    fontFamily: Fonts.Inter_Regular,
    marginTop: 8,
  },
  cardNums: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardIconContainer: {
    width: 26,
    height: 16,
    opacity: 60,
    marginBottom: 5,
  },
});

export default Card;
