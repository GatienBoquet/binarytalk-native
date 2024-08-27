import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
  ToastAndroid,
  Pressable,
} from "react-native";

import { _utf8ToBin } from "../../api/conversion";
import * as Clipboard from "expo-clipboard";

import { onShare } from "../../api/functions";
import { FontAwesome } from "@expo/vector-icons";

import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import * as fr from "../../localization/fr.json";
import * as en from "../../localization/en.json";
import { Styles } from "../shared/styles/Styles";

const ToBinaryView = () => {
  const translations = {
    fr: fr,
    ["fr-FR"]: fr,
    en: en,
  };
  const i18n = new I18n(translations);
  // Set the locale once at the beginning of your app.
  i18n.locale = getLocales()[0].languageCode ?? "en";

  i18n.fallbacks = true;

  let defaultData = i18n.t("defaultData.defaultTxt");
  const [value, onChangeText] = useState(defaultData);

  const [binary, onChangeBinary] = useState("");

  const copyToClipboard = async (txt) => {
    if (txt) {
      await Clipboard.setStringAsync(txt);
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
  }, [value]);

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
            multiline={true}
            onChangeText={onChangeText}
            style={Styles.textInput}
          />
          {binary ? (
            <Pressable onPress={clearText}>
              <FontAwesome name="remove" size={30} color="black" />
            </Pressable>
          ) : null}
        </View>
        <ScrollView style={Styles.scrollContainer}>
          <Text style={Styles.textConverti}>{binary}</Text>
        </ScrollView>
        <View style={Styles.subContainerAction}>
          <FontAwesome.Button
            disabled={binary ? false : true}
            underlayColor="#bdc3c7"
            backgroundColor="rgba(52, 52, 52, 0)"
            name="copy"
            title="Copier"
            size={30}
            color={binary ? "black" : "grey"}
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
            size={30}
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
            color={binary ? "black" : "grey"}
            size={30}
            onPress={() => onShare(binary)}
          >
            {i18n.t("actions.share")}
          </FontAwesome.Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToBinaryView;
