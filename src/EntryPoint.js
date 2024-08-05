/*
---------------------------------------------------
--entryPoint - Point d'entrée de mon application --
---------------------------------------------------

Permet d'avoir un state globable sur NavigationContainer et de changer le thème 🤠
*/

import { StatusBar } from "react-native";
import React, { useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import * as themes from "./theme/themes";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { getLocales } from "expo-localization";

import { I18n } from "i18n-js";
//import notre store Globale
import { Context } from "./state/store";
// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
  en: { welcome: "Hello" },
  ja: { welcome: "こんにちは" },
});

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode;

const EntryPoint = () => {
  //utilisation de context pour récupérer le state globale.
  const [state, dispatch] = useContext(Context);

  const allThemes = {
    0: themes.DefaultMyTheme,
    1: themes.BlackTheme,
    2: themes.BlueTheme,
  };

  //useEffect = run une fois au lancement de l'app
  useEffect(() => {
    StatusBar.setBackgroundColor(themes.DefaultMyTheme.colors.card);
  }, []);

  //useEffect = run si changement de state
  useEffect(() => {
    StatusBar.setBackgroundColor(allThemes[state.theme].colors.card);
  }, [state]);

  return (
    <NavigationContainer theme={allThemes[state.theme]}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default EntryPoint;

const styles = StyleSheet.create({});
