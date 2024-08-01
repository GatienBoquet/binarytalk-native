import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { Context } from "../state/store";

const ThemeList = (props) => {
  //ici on récupère le state globale et on assigne sur le state locale
  //le changement de state s'opère sur le custom drawer content pour le thème
  const [state, dispatch] = useContext(Context);
  const [isSelected, setSelection] = useState([false, false, false]);

  useEffect(() => {
    let items = [...isSelected];

    set_Selected(state.theme);
  }, []);

  const set_Selected = (e) => {
    let items = [...isSelected];
    let newItems = [];
    items.forEach((element) => {
      element = false;
      newItems.push(element);
    });

    newItems[e] = true;

    setSelection(newItems);
    return e;
  };

  return (
    <View style={styles.checkListContainer}>
      <View style={styles.checkBoxView}>
        <Checkbox
          value={isSelected[0]}
          onValueChange={() => props.changeTheme(set_Selected(0))}
          color={"#2ecc71"}
        />
        <Text
          style={isSelected[0] ? styles.checkBoxTxtBold : styles.checkBoxTxt}
        >
          Default - Green
        </Text>
      </View>
      <View style={styles.checkBoxView}>
        <Checkbox
          color={"#2c3e50"}
          value={isSelected[1]}
          onValueChange={() => props.changeTheme(set_Selected(1))}
        />
        <Text
          style={isSelected[1] ? styles.checkBoxTxtBold : styles.checkBoxTxt}
        >
          Dark Blue
        </Text>
      </View>
      <View style={styles.checkBoxView}>
        <Checkbox
          color={"#3498db"}
          value={isSelected[2]}
          onValueChange={() => props.changeTheme(set_Selected(2))}
        />
        <Text
          style={isSelected[2] ? styles.checkBoxTxtBold : styles.checkBoxTxt}
        >
          Blue
        </Text>
      </View>
    </View>
  );
};

export default ThemeList;

const styles = StyleSheet.create({
  checkListContainer: {},
  checkBoxView: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxTxtBold: {
    fontSize: 15,
    fontWeight: "bold",
  },
  checkBoxTxt: {
    fontSize: 15,
  },
});
