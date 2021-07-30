import { DefaultTheme } from "@react-navigation/native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

/*
fond de la main view :
	colors:
		background:

haut du screen qui contient tabs et statusbar
	colors: {
		card
	}
*/


export const DefaultMyTheme = {
	backgroundColor: "white",
	colors: {
		card: "#2ecc71",
		text: "white",
	},
	statusbar: {
		backgroundColor: "blue",
	},
	tabBarOptions: {
		labelStyle: {
			fontSize: 20,
		},
		indicatorStyle: {
			backgroundColor: "white",
		},
	},
	headerTintColor: {
		backgroundColor: "white",
	},
};

export const BlueTheme = {
	backgroundColor: "white",
	colors: {
		card: "#3498db",
		text: "white",
	},
	statusbar: {
		backgroundColor: "blue",
	},
	tabBarOptions: {
		labelStyle: {
			fontSize: 20,
		},
		indicatorStyle: {
			backgroundColor: "white",
		},
	},
	headerTintColor: {
		backgroundColor: "white",
	},
};

export const BlackTheme = {
	backgroundColor: "white",
	colors: {
		card: "#2c3e50",
		text: "white",
	},
	statusbar: {
		backgroundColor: "blue",
	},
	tabBarOptions: {
		labelStyle: {
			fontSize: 20,
		},
		indicatorStyle: {
			backgroundColor: "white",
		},
	},
	headerTintColor: {
		backgroundColor: "white",
	},
};
