import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const customtextInput = () => {
	return (
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
	);
};

export default customtextInput;

const styles = StyleSheet.create({});
