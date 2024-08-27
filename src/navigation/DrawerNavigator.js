import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackNavigator from "./MainStackNavigator";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ color }) => {
  console.log(color);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor: "#ffffff",
        drawerStyle: {
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          color: "white",
          backgroundColor: color, // Couleur de fond du tiroir
        },
        headerStyle: {
          borderWidth: 0,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
      }}
      drawerContent={() => <CustomDrawerContent color={color} />}
    >
      <Drawer.Screen name="Binary Talk" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
