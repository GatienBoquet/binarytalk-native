import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
  ToastAndroid,
} from "react-native";

import { _binaryToTxt } from "../../api/conversion";
import * as Clipboard from "expo-clipboard";

import { onShare } from "../../api/functions";
import { FontAwesome } from "@expo/vector-icons";

import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import * as fr from "../../localization/fr.json";
import * as en from "../../localization/en.json";
import { Styles } from "../shared/styles/Styles";

const ToTextView = () => {
  const translations = {
    fr: fr,
    ["fr-FR"]: fr,
    en: en,
  };

  const i18n = new I18n(translations);

  // Set the locale once at the beginning of your app.
  i18n.locale = getLocales()[0].languageCode ?? "en";

  i18n.fallbacks = true;

  let defaultData = i18n.t("defaultData.defaultBin");
  const [value, onChangeText] = useState(defaultData);
  const [txt, onChangeTxt] = useState("Du texte");

  const copyToClipboard = async (txt) => {
    await Clipboard.setStringAsync(txt);
  };

  const _isBinary = (txt) => {
    const regex = new RegExp("^[0-1]{1,}$");
    if (regex.test(txt)) {
      return true;
    }
    return false;
  };

  const _safeOnChangeText = (txt) => {
    if (_isBinary(txt)) {
      onChangeText(txt);
    } else {
      ToastAndroid.show(i18n.t("error.copy_nonbinary"), ToastAndroid.SHORT);
    }
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    if (_isBinary(text)) {
      onChangeText(text);
    } else {
      ToastAndroid.show(i18n.t("error.copy_nonbinary"), ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    onChangeTxt(_binaryToTxt(value));
  }, [value]);

  const clearText = () => {
    onChangeText("");
    onChangeTxt("");
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.subContainer}>
        <View style={Styles.customTextInputContainer}>
          <TextInput
            value={value}
            multiline={true}
            onChangeText={_safeOnChangeText}
            keyboardType={"numeric"}
            style={Styles.textInput}
          />
          {txt ? (
            <FontAwesome
              name="remove"
              size={30}
              color="black"
              onPress={clearText}
            />
          ) : null}
        </View>
        <ScrollView style={Styles.scrollContainer}>
          <Text style={Styles.textConverti}>{txt}</Text>
        </ScrollView>
        <View style={Styles.subContainerAction}>
          <FontAwesome.Button
            disabled={txt ? false : true}
            backgroundColor="rgba(52, 52, 52, 0)"
            underlayColor="#bdc3c7"
            name="copy"
            title="Copier"
            color="black"
            onPress={() => copyToClipboard(txt)}
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
            disabled={txt ? false : true}
            backgroundColor="rgba(52, 52, 52, 0)"
            underlayColor="#bdc3c7"
            name="share"
            title="Partager"
            color="black"
            onPress={() => onShare(txt)}
          >
            {i18n.t("actions.share")}
          </FontAwesome.Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToTextView;
