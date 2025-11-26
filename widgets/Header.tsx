import { NotificationsIcon, QrIcon } from "@/assets/svg";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Fonts} from "@/app/_layout";

interface HeaderProps {
  title: string;
  routeName: string;
}

const Header: React.FC<HeaderProps> = ({ title, routeName }) => {
  if (routeName === "index") {
    return (
      <View style={styles.header}>
        <Link push href={"/notifications"} style={styles.backIcon}>
          <View style={styles.userInfo}>
            <View style={styles.userLogoContainer}>
              <Image
                source={require("../assets/images/user-logo.png")}
                style={styles.userLogo}
              />
            </View>
            <Text style={styles.userName}>{title}</Text>
            <Entypo
              style={styles.userInfoIcon}
              name="chevron-small-right"
              size={24}
              color="white"
            />
          </View>
        </Link>
        <TouchableOpacity style={styles.headerIcon}>
          <QrIcon />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.notificationsContainer}>
      <Link style={styles.backIcon} push href={'/(tabs)'}>
        <Entypo name="chevron-small-left" size={24} color="white" />
      </Link>
      <View style={styles.notificationsTitle}>
        <Text style={styles.notificationsTitle}>{title}</Text>
      </View>
      {routeName === "notifications" && (
        <TouchableOpacity style={styles.headerIcon}>
          <NotificationsIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 30,
    verticalAlign: "middle",
    paddingTop: 16,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: Fonts.Inter_Medium,
  },
  headerIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  userLogoContainer: {
    width: 36,
    height: 36,
    backgroundColor: "#0f0f0f",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  userLogo: {
    width: 15,
    height: 15,
    objectFit: "cover",
  },
  userInfoIcon: {
    display: "flex",
    alignSelf: "center",
  },
  notificationsTitle: {
    flexDirection: "row",
    color: "#ffff",
    fontSize: 21,
  },
  notificationsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  backIcon: {
    display: "flex",
    alignSelf: "center",
  },
});

export default Header;
