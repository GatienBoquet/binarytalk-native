import React from "react";
import { StyleSheet, Button } from "react-native";
import "react-native-gesture-handler";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import EntryPoint from "./src/EntryPoint";
/*
Binary Talk 3.0 remade with React Native
https://github.com/GatienBoquet

*/

//import notre store Globale
import Store, { Context } from "./src/state/store";

/*
i18n = Lib pour traduire l'application 
*/

export default function App() {
  return (
    <Store>
      <EntryPoint />
    </Store>
  );
}

const styles = StyleSheet.create({
  container: {},
});
