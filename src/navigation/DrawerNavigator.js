import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import MainStackNavigator from "./MainStackNavigator";
import CustomDrawerContent from "./CustomDrawerContent";
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "#ffffff",
        drawerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          color: "white",
          backgroundColor: "#2ecc71", // Couleur de fond du tiroir
        },
        headerStyle: {
          borderWidth: 0,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Binary Talk" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
