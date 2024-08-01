import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  ToastAndroid,
} from "react-native";

import { _utf8ToBin, _binaryToTxt } from "../../api/conversion";
import * as Clipboard from "expo-clipboard";

import { onShare } from "../../api/functions";
import { FontAwesome } from "@expo/vector-icons";

import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import * as fr from "../../localization/fr.json";
import * as en from "../../localization/en.json";

const toBinaryView = () => {
  const translations = {
    fr: fr,
    ["fr-FR"]: fr,
    en: en,
  };
  const i18n = new I18n(translations);
  // Set the locale once at the beginning of your app.
  i18n.locale = getLocales()[0].languageCode ?? "en";

  i18n.fallbacks = true;

  defaultData = i18n.t("defaultData.defaultTxt");
  const [value, onChangeText] = useState(defaultData);

  const [binary, onChangeBinary] = useState("");

  const copyToClipboard = (txt) => {
    if (txt) {
      Clipboard.setString(txt);
    } else {
      ToastAndroid.show("Can't copy blank texts", ToastAndroid.SHORT);
    }
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    onChangeText(text);
  };

  useEffect(() => {
    onChangeBinary(_utf8ToBin(value));
  });

  const clearText = () => {
    onChangeText("");
    onChangeBinary("");
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.subContainer}>
        <View style={Styles.customTextInputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={Styles.textInput}
          />
          {binary ? (
            <FontAwesome
              name="remove"
              size={30}
              color="black"
              onPress={clearText}
            />
          ) : null}
        </View>
        <ScrollView style={Styles.scrollContainer}>
          <Text style={Styles.textBinaire}>{binary}</Text>
        </ScrollView>
      </View>
      <View style={Styles.subContainerAction}>
        <FontAwesome.Button
          disabled={binary ? false : true}
          underlayColor="#bdc3c7"
          backgroundColor="rgba(52, 52, 52, 0)"
          name="copy"
          title="Copier"
          color="black"
          onPress={() => copyToClipboard(binary)}
        >
          {i18n.t("actions.copy")}
        </FontAwesome.Button>
        <FontAwesome.Button
          underlayColor="#bdc3c7"
          backgroundColor="rgba(52, 52, 52, 0)"
          name="paste"
          title="Coller"
          color="black"
          onPress={fetchCopiedText}
        >
          {i18n.t("actions.paste")}
        </FontAwesome.Button>
        <FontAwesome.Button
          disabled={binary ? false : true}
          underlayColor="#bdc3c7"
          backgroundColor="rgba(52, 52, 52, 0)"
          name="share"
          title="Partager"
          color="black"
          size={30}
          onPress={() => onShare(binary)}
        >
          {i18n.t("actions.share")}
        </FontAwesome.Button>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0, // Enlever les marges externes
    padding: 0, // Réduire le padding
  },
  subContainer: {
    margin: 10, // Réduire les marges internes
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "flex-start",
    alignSelf: "stretch", // Occuper toute la largeur
    flexGrow: 4,
  },
  scrollContainer: {
    maxHeight: 200, // Limite de la hauteur maximale pour le ScrollView
  },
  textInput: {
    flexShrink: 1,
    maxHeight: 80,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    fontSize: 20, // Réduire la taille de la police pour réduire l'espace
    flexWrap: "wrap",
    flexGrow: 1,
    color: "black",
    width: "100%", // Occuper toute la largeur
  },
  textBinaire: {
    color: "black",
    fontSize: 15,
    alignSelf: "stretch", // Occuper toute la largeur
    flexWrap: "wrap", // Permettre au texte de se casser à la ligne
    wordBreak: "break-word", // Assurer que les mots se cassent correctement
    width: "100%", // Occuper toute la largeur
    flexShrink: 1, // Permettre au texte de se réduire si nécessaire
  },
  subContainerAction: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center", // Centrer les éléments
    flexDirection: "row",
    paddingHorizontal: 5, // Réduire le padding horizontal
  },
  customTextInputContainer: {
    alignSelf: "stretch", // Occuper toute la largeur
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    alignItems: "center", // Centrer les éléments
    marginVertical: 5, // Réduire l'espace vertical
  },
  customTextInput: {
    //backgroundColor: "blue",
  },
  binaryContainer: {
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    flex: 1,
    padding: 5, // Réduire le padding
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 200,
    overflow: "hidden",
    width: "100%",
  },
});

export default toBinaryView;
