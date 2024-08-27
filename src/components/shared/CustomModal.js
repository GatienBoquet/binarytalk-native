import React from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { I18n } from "i18n-js";
import * as fr from "../../localization/fr.json";
import * as en from "../../localization/en.json";

const translations = {
  fr: fr,
  ["fr-FR"]: fr,
  en: en,
};
const i18n = new I18n(translations);

const CustomModal = ({ isVisible, children, onClose, colorButton }) => {
  console.log(colorButton);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {children}
            <Pressable
              onPress={onClose}
              style={[styles.button, { backgroundColor: colorButton }]}
            >
              <Text style={styles.textStyle}>
                {i18n.t("drawer.actionModal")}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    //debug : color: "white",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  modalText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    //backgroundColor: "#2ecc71",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
