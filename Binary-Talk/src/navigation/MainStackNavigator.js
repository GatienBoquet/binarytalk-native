import React from "react";

import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { customTabNavigation } from "./customTabNavigation";
import { FontAwesome5 } from "@expo/vector-icons";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

function LogoTitle(navigation) {
	return (
		<View style={styles.titleContainer}>
			<TouchableOpacity
				onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
				styles={styles.menu}
			>
				<FontAwesome5 name="bars" size={30} color="white" />
			</TouchableOpacity>
			<Text style={styles.title}>Binary Talk</Text>
		</View>
	);
}

const MainStackNavigator = ({ navigation, theme }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Binary Talk"
				component={customTabNavigation}
				options={{
					headerStyle: {
						elevation: 0, // remove shadow on Android
						shadowOpacity: 0, // remove shadow on iOS
					},
					headerTitle: <LogoTitle {...navigation} />,
				}}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {},
	menu: {
		//backgroundColor: "blue",
	},
	titleContainer: {
		flexGrow: 1,
		//backgroundColor: 'grey',
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "baseline",
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: "white",
		paddingLeft: 25,
	},
});

export default MainStackNavigator;
