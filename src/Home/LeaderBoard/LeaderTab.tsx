import React from "react"
import { StatusBar, StyleSheet } from "react-native"
import { moderateScale } from "react-native-size-matters"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { IndividualRank } from "./IndividualRank"
import { TeamRank } from "./TeamRank"
import { Label, PrimaryView } from "../../common/components"
import LinearGradient from "react-native-linear-gradient"

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const TopTab = createMaterialTopTabNavigator();

export const LeaderTab = () => {

    return (
        <PrimaryView style={{ backgroundColor: '#43C6AC' }}>
            <StatusBar backgroundColor={"#43C6AC"} barStyle="dark-content" />
            <LinearGradient colors={["#43C6AC", '#F8FFAE']} style={styles.container}>
                <Label xxl center bold white title={"Leaderboard"} style={{ marginVertical: moderateScale(20) }} />

                <TopTab.Navigator
                    screenOptions={{
                        swipeEnabled: false,
                        tabBarPressColor: "#CBF5DD",
                        tabBarActiveTintColor: "#0f9b0f",
                        tabBarInactiveTintColor: "black",
                        tabBarIndicatorStyle: {
                            borderBottomWidth: moderateScale(2),
                            borderBottomColor: "#0f9b0f"
                        },
                        tabBarLabelStyle: {
                            fontWeight: 'bold'
                        }
                    }}
                >
                    <TopTab.Screen
                        name={"Individual"}
                        children={() => <IndividualRank />} />
                    <TopTab.Screen
                        name={"Team"}
                        children={() => <TeamRank />} />
                </TopTab.Navigator>
            </LinearGradient>
        </PrimaryView>
    )
}