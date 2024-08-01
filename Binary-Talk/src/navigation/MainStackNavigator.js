import React from "react";

import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CustomTabNavigation } from "./CustomTabNavigation";
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
    </View>
  );
}

const MainStackNavigator = ({ navigation, theme }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0,
          shadowOpacity: 0,
          backgroundColor: "blue",
          borderBottomColor: "blue",
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        contentStyle: {
          borderTopColor: "blue",
          borderTopWidth: 3,
        },
      }}
    >
      <Stack.Screen
        name="Binary"
        component={CustomTabNavigation}
        options={{
          tabBarShowLabel: false,
          headerStyle: {
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
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
