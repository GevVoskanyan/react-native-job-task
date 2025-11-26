import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Fonts} from "@/app/_layout";

interface NotificationProps {
    title: string;
    description: string;
    date: string;
    time: string;
    type: string;
    src: any;
    amount?: string;
    balance?: string;
    day: string;
}

const NotificationItem: React.FC<NotificationProps> = ({
                                                           title,
                                                           description,
                                                           date,
                                                           src,
                                                           type,
                                                           time,
                                                           balance,
                                                           amount,
                                                           day,
                                                       }) => {
    return (
        <View style={styles.item}>
            <View
                style={[
                    type === "Payments"
                        ? styles.imageContainer
                        : styles.containerForIcons,
                ]}
            >
                <Image
                    style={[type === "Payments" ? styles.image : styles.icons]}
                    source={src}
                />
            </View>
            <View>
                <Text style={styles.title}>{title} </Text>
                {amount && <Text style={styles.amount}>{amount} </Text>}
                <Text style={styles.description}>{description}</Text>
                {balance && <Text style={styles.balance}>{balance}</Text>}
                <Text style={styles.date}>
                    {date} {time} {day !== "" ? "2025" : ""} • {type === 'System' ? 'Security' : type}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#222",
        backgroundColor: "#060503",
    },
    title: {
        color: "white",
        fontWeight: "500",
        fontSize: 14,
        fontFamily: Fonts.Inter_Medium,
        marginBottom: 6,
    },
    description: {
        color: "gray",
        fontFamily: Fonts.Inter_Regular,
        fontSize: 14,
        width: 290,
    },
    date: {
        color: "#555",
        marginTop: 2,
        fontSize: 12,
        fontFamily: Fonts.Inter_Regular,
    },
    imageContainer: {
        width: 42,
        height: 42,
        marginRight: 12,
    },
    containerForIcons: {
        width: 42,
        height: 42,
        padding: 11,
        backgroundColor: "#0F0F0F",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
        borderRadius: 50,
    },
    image: {
        width: 42,
        height: 42,
        objectFit: "cover",
    },
    icons: {
        width: 22,
        height: 22,
        objectFit: "cover",
    },
    amount: {
        color: "#FE5900",
        fontSize: 21,
        fontWeight: 600,
        fontFamily: Fonts.Inter_Bold,
    },
    balance: {
        color: "#AEAEAE",
        fontSize: 14,
        fontFamily: Fonts.Inter_Regular,
    },
});

export default NotificationItem;
