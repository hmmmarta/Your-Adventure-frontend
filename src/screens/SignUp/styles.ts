import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  buttonPlacement: {
    flex: 1,
    marginTop: 80,
    marginHorizontal: 25,
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F2F",

    fontFamily: "Inter-Bold"
  },
  fontInterThin: {
    fontFamily: "Inter-Thin",
    color: "#969696",
    marginTop: 4,
    marginLeft: 25,
    fontSize: 20
=======
    fontFamily: "Inter_700Bold",
  },
  fontInterThin: {
    fontFamily: "Inter_100Thin",
    color: "#969696",
    marginTop: 4,
    marginLeft: 25,
    fontSize: 20,
  },
  textInputFocused: {
    borderColor: "#367AFF",


    color: "#969696"
  },
  button: {
    backgroundColor: '#367AFF', 
    padding: 10,
    borderRadius: 10, 
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: "Inter-SemiBold"
  },
  textInputFocused: {
    borderColor: '#367AFF', 
  },
  btnEye: {
    position: 'absolute',
    right: 40,
    top: 322
  }
});
export default styles;
