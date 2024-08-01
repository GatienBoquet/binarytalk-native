import React from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
const _CustomModal = (props) => {
  return (
    <View styles={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{props.children}</View>
        </View>
      </Modal>
    </View>
  );
};

export default _CustomModal;

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
});
