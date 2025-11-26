import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    initialRouteName: "(tabs)", // Must match your folder exactly
};

export const Fonts = {
    Inter_Regular: "Inter-Regular",
    Inter_Medium: "Inter-Medium",
    Inter_SemiBold: "Inter-SemiBold",
    Inter_Bold: "Inter-Bold",
};

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "Inter-Regular": Inter_400Regular,
        "Inter-Medium": Inter_500Medium,
        "Inter-SemiBold": Inter_600SemiBold,
        "Inter-Bold": Inter_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <SafeAreaProvider>
            <ThemeProvider value={DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

                    <Stack.Screen
                        name="notifications"
                        options={{ headerShown: false, title: "Notifications" }}
                    />
                </Stack>
                <StatusBar style="light" backgroundColor="#060503" />
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
