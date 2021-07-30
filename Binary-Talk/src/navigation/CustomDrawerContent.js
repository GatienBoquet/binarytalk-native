import React, { useState, useContext, useEffect } from "react";
import { Context } from "../state/store";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import * as Linking from "expo-linking";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import i18n from "i18n-js";
import * as fr from "../localization/fr.json";
import * as en from "../localization/en.json";
import * as Localization from "expo-localization";
import ThemeList from "../components/ThemeList";
import _CustomModal from "../components/_shared/_CustomModal";
/*
Pour afficher les screens :
<DrawerItemList {...props} />
*/

/*

--


*/

//move dans un fichier constants?
const modalTextTitle = "Binary Talk";
const modalTextBottom = "Gatien Boquet \n 2021";

const CustomDrawerContent = (props) => {
	i18n.translations = {
		fr: fr,
		["fr-FR"]: fr,
		en: en,
	};

	i18n.locale = Localization.locale;
	i18n.fallbacks = true;

	const [modalVisible, setModalVisible] = useState(false);
	const [themeChangerVisible, setThemeChangerVisible] = useState(false);

	const [isChecked, setChecked] = useState(false);

	const [lepayload, setlepayload] = useState(0);

	function handleChangeTheme() {
		setThemeChangerVisible(!themeChangerVisible);
	}
	const [state, dispatch] = useContext(Context);

	//dispatch ici l'action d'update le store globable
	//cause re render
	function changeTheme(d) {
		setlepayload(d);
	}

	//dispatch uniquement quand le payload est modifié.
	useEffect(() => {
		let payload = lepayload;
		dispatch({ type: "UPDATE_THEME", payload });
	}, [lepayload]);

	const _ModalTheme = ({ handleChange }) => {
		return (
			<_CustomModal visible={themeChangerVisible}>
				<Text style={styles.modalText}>{i18n.t("view.changeTheme")}</Text>
				<ThemeList changeTheme={changeTheme} />
				<Pressable
					style={[styles.button, styles.buttonClose]}
					onPress={() => handleChange(!themeChangerVisible)}
				>
					<Text style={styles.textStyle}>{i18n.t("drawer.actionModal")}</Text>
				</Pressable>
			</_CustomModal>
		);
	};

	const _ModalAbout = ({ handleChange }) => {
		return (
			<_CustomModal visible={modalVisible}>
				<Text style={styles.modalText}>
					{modalTextTitle}
					{"\n"}
					{i18n.t("drawer.modalTxt")}
					{"\n"}
					{modalTextBottom}
					{"\n"}
				</Text>
				<Pressable
					style={[styles.button, styles.buttonClose]}
					onPress={() => handleChange(!modalVisible)}
				>
					<Text style={styles.textStyle}>{i18n.t("drawer.actionModal")}</Text>
				</Pressable>
			</_CustomModal>
		);
	};

	function handleChange() {
		setModalVisible(!modalVisible);
	}

	return (
		<DrawerContentScrollView {...props} style={styles.container}>
			<View styles={styles.subContainer}>
				<Text style={styles.drawerTitle}>Binary Talk 3.0</Text>
				<DrawerItem
					{...props}
					style={styles.drawerItem}
					label={i18n.t("drawer.Item_1")}
					labelStyle={{
						color: "white",
					}}
					onPress={() => setModalVisible(true)}
				/>
				<DrawerItem
					{...props}
					labelStyle={{
						color: "white",
					}}
					label={i18n.t("drawer.Item_2")}
					onPress={() => Linking.openURL("http://google.com")}
				/>
				<DrawerItem
					{...props}
					labelStyle={{
						color: "white",
					}}
					label={"Change theme"}
					onPress={() => setThemeChangerVisible(true)}
				/>

				<_ModalAbout handleChange={handleChange} visible={modalVisible} />
				<_ModalTheme
					handleChange={handleChangeTheme}
					visible={themeChangerVisible}
					changeTheme={changeTheme}
				/>
			</View>
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		//backgroundColor: "#2ecc71",
		color: "black",
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
