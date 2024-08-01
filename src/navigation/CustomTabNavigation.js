import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import toBinaryView from "../components/toBinaryView/index";
import toTextView from "../components/toTextView/index";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { I18n } from "i18n-js";
import * as fr from "../localization/fr.json";
import * as en from "../localization/en.json";
import { getLocales } from "expo-localization";
const Tab = createMaterialTopTabNavigator();

export const CustomTabNavigation = () => {
  const translations = {
    fr: fr,
    ["fr-FR"]: fr,
    en: en,
  };
  const i18n = new I18n(translations);

  // Set the locale once at the beginning of your app.
  i18n.locale = getLocales()[0].languageCode ?? "en";

  i18n.fallbacks = true;

  return (
    <Tab.Navigator
      style={styles.container}
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
        },
        indicatorStyle: {
          marginBottom: 5,
          backgroundColor: "white",
        },
        tabStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen name={i18n.t("navigation.toBin")} component={toBinaryView} />
      <Tab.Screen name={i18n.t("navigation.toTxt")} component={toTextView} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#2ecc71",
  },
});
