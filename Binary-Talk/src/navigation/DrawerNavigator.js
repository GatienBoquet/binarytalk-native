import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import MainStackNavigator from "./MainStackNavigator";
import CustomDrawerContent from "./CustomDrawerContent";
const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen name="Converter" component={MainStackNavigator} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
