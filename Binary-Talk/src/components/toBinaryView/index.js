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

import * as Localization from "expo-localization";
import i18n from "i18n-js";
import * as fr from "../../localization/fr.json";
import * as en from "../../localization/en.json";

const toBinaryView = () => {
	i18n.translations = {
		fr: fr,
		["fr-FR"]: fr,
		en: en,
	};

	i18n.locale = Localization.locale;
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
				<Text>{i18n.t("view.showBin")}</Text>
				<ScrollView style={Styles.binaryContainer}>
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
		margin: 15,
		//backgroundColor: "grey",
	},
	subContainer: {
		flex: 1,
		flexDirection: "column",
		//backgroundColor: "blue",
		alignItems: "center",
		alignContent: "flex-start",
		alignSelf: "baseline",
		flexGrow: 4,
	},
	textInput: {
		flexShrink: 1,
		maxHeight: 80,
		borderBottomColor: "grey",
		borderBottomWidth: 1,
		fontSize: 25,
		flexWrap: "wrap",
		//backgroundColor: "grey",
		flexGrow: 1,
		color: "black",
	},
	textBinaire: {
		color: "black",
		//debug : color: 'white',
		fontSize: 15,
	},
	subContainerAction: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "flex-end",
		flexDirection: "row",
		//backgroundColor: "red",
	},
	customTextInputContainer: {
		alignSelf: "flex-start",
		justifyContent: "space-between",
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
		//backgroundColor: "grey",
	},
	customTextInput: {
		//backgroundColor: "blue",
	},
	binaryContainer: {
		//backgroundColor: 'grey',
		flex: 1,
		flexWrap: "wrap",
		flexGrow: 1,
	},
});

export default toBinaryView;
