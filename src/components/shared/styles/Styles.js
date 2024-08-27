import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    margin: 10, // Réduire les marges internes
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "flex-start",
    justifyContent: "space-between",
    alignSelf: "stretch", // Occuper toute la largeur
    flexGrow: 1,
  },
  scrollContainer: {
    marginTop: 10,
    flex: 1,
    width: "100%",
  },
  textInput: {
    maxHeight: 80,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    fontSize: 20, // Réduire la taille de la police pour réduire l'espace
    wordBreak: "break-word", // Assurer que les mots se cassent correctement
    flexWrap: "wrap",
    flex: 1,
    color: "black",
    alignSelf: "stretch",
    width: "100%", // Occuper toute la largeur
  },
  textConverti: {
    backgroundColor: "light-grey",
    color: "black",
    fontSize: 15,
    alignSelf: "stretch", // Occuper toute la largeur
    flexWrap: "wrap", // Permettre au texte de se casser à la ligne
    wordBreak: "break-word", // Assurer que les mots se cassent correctement
    width: "100%", // Occuper toute la largeur
    flexShrink: 1, // Permettre au texte de se réduire si nécessaire
  },
  subContainerAction: {
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center", // Centrer les éléments
    flexDirection: "row",
    width: "100%",
  },
  customTextInputContainer: {
    alignSelf: "stretch", // Occuper toute la largeur
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5, // Réduire l'espace vertical
  },
});
