import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {Fonts} from "@/app/_layout";

interface TransactionProps {
  name: string;
  type: string;
  amount: number;
  date: string;
  src: any;
  typeColor: string;
}

const TransactionItem: React.FC<TransactionProps> = ({
  name,
  type,
  amount,
  date,
  src,
  typeColor,
}) => {
  return (
    <View style={styles.item}>
      <View style={styles.transactionItemLogoContainer}>
        <Image style={styles.transactionItemLogo} source={src} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.typeContainer}>
          <View
            style={[styles.typeColor, { backgroundColor: typeColor }]}
          ></View>
          <Text style={styles.type}>{type}</Text>
        </View>
      </View>
      <View style={styles.transactionItemAmountContainer}>
        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        <Text style={styles.amountDate}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#0F0F0F",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 2,
  },
  name: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: Fonts.Inter_Medium,
  },
  type: {
    color: "#B3B3B3",
    marginTop: 2,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: Fonts.Inter_Regular,
  },
  amount: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: Fonts.Inter_Medium,
  },
  amountDate: { color: "#B3B3B3", fontSize: 14 },
  transactionItemLogoContainer: {
    width: 36,
    height: 36,
    backgroundColor: "#FF6C00",
    borderRadius: 12,
    marginRight: 12,
  },
  transactionItemLogo: {
    width: 36,
    height: 36,
    objectFit: "cover",
  },
  transactionItemAmountContainer: {
    marginLeft: "auto",
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  typeColor: {
    width: 6,
    height: 6,
    borderRadius: 50,
  },
});

export default TransactionItem;
