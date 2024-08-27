import React, { useState, useContext, useEffect, useRef, useMemo } from "react";
import { Context } from "../state/store";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import * as Linking from "expo-linking";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import * as fr from "../localization/fr.json";
import * as en from "../localization/fr.json";
import ThemeList from "../components/ThemeList";
import CustomModal from "../components/shared/CustomModal";
import { useDrawerStatus } from "@react-navigation/drawer";
/*
Pour afficher les screens :
<DrawerItemList {...props} />
*/

/*

--


*/

//move dans un fichier constants?
const modalTextTitle = "Binary Talk";
const modalTextBottom = "Gatien Boquet \n 2024";

const CustomDrawerContent = ({ color }) => {
  const translations = {
    fr: fr,
    ["fr-FR"]: fr,
    en: en,
  };
  const i18n = new I18n(translations);

  // Set the locale once at the beginning of your app.
  i18n.locale = getLocales()[0].languageCode ?? "en";

  i18n.fallbacks = true;

  const [modalVisible, setModalVisible] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const themeChangerVisible = useRef(false);

  const [lepayload, setlepayload] = useState(0);

  const handleChangeTheme = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  console.log(themeChangerVisible.current + " - re render");

  const [state, dispatch] = useContext(Context);

  //dispatch ici l'action d'update le store globable
  //cause re render
  function changeTheme(d) {
    setlepayload(d);
  }

  function handleChange() {
    setModalVisible(!modalVisible);
  }

  //dispatch uniquement quand le payload est modifié.
  useEffect(() => {
    let payload = lepayload;
    dispatch({ type: "UPDATE_THEME", payload });
  }, [lepayload]);

  const Modal_Theme = useMemo(() => {
    const ModalComponent = ({ isVisible, onClose, color }) => {
      return (
        <CustomModal
          isVisible={isVisible}
          onClose={onClose}
          colorButton={color}
        >
          <Text style={styles.modalText}>{i18n.t("view.changeTheme")}</Text>
          <ThemeList changeTheme={changeTheme} />
        </CustomModal>
      );
    };

    ModalComponent.displayName = "Modal_Theme";
    return ModalComponent;
  }, []);

  const Modal_About = ({ handleChange }) => {
    return (
      <CustomModal isVisible={modalVisible}>
        <Text style={styles.modalText}>
          {modalTextTitle}
          {"\n"}
          {i18n.t("drawer.modalTxt")}
          {"\n"}
          {modalTextBottom}
          {"\n"}
        </Text>
        <Pressable
          style={[styles.button, { backgroundColor: color }]}
          onPress={() => handleChange(!modalVisible)}
        >
          <Text style={styles.textStyle}>{i18n.t("drawer.actionModal")}</Text>
        </Pressable>
      </CustomModal>
    );
  };

  return (
    <DrawerContentScrollView style={styles.container}>
      <View styles={styles.subContainer}>
        <Text style={styles.drawerTitle}>Binary Talk 3.0</Text>
        <DrawerItem
          style={styles.drawerItem}
          label={i18n.t("drawer.Item_1")}
          labelStyle={{
            color: "white",
          }}
          onPress={() => setModalVisible(true)}
        />
        <DrawerItem
          labelStyle={{
            color: "white",
          }}
          label={i18n.t("drawer.Item_2")}
          onPress={() => Linking.openURL("http://google.com")}
        />
        <DrawerItem
          labelStyle={{
            color: "white",
          }}
          label={"Change theme"}
          onPress={() => handleChangeTheme()}
        />

        <Modal_About handleChange={handleChange} isVisible={false} />
        <Modal_Theme
          onClose={handleChangeTheme}
          isVisible={isModalVisible}
          color={color}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#2ecc71",
    color: "transparent",
    ///Debug : backgroundColor: "grey",
  },
  subContainer: {},
  drawerTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 30,
  },
  drawerItem: {
    color: "white",
    fontWeight: "bold",
  },
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
  button: {
    //backgroundColor: "#2ecc71",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#2ecc71",
  },
  buttonClose: {
    backgroundColor: "#2ecc71",
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
});

export default CustomDrawerContent;
