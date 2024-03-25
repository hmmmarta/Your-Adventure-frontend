import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F2F",
  },
  fontInterBold: {
    marginTop: 90,
    marginLeft: 25,
    color: "white",
    fontSize: 40,
    // fontFamily: "Inter_700Bold",
  },
  fontInterThin: {
    // fontFamily: "Inter_100Thin",
    color: "#969696",
    marginTop: 4,
    marginLeft: 25,
    fontSize: 20,
  },
  textInputFocused: {
    borderColor: "#367AFF",
  },

  btnEye: {
    position: 'absolute',
    right: 40,
    top: 50

  },

});

export default styles;
