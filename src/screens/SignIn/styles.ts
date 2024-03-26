import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    image: {
        width: 260,
        height: 260,
        marginHorizontal: 65,
        marginTop: 60
    },
    fontInterBold: {
        marginTop: 10,
        marginLeft: 25,
        color: "white",
        fontSize: 32,
        fontFamily: "Inter-Bold"
    },
    fontInterRegular: {
        fontFamily: "Inter-Regular",
        color: "#969696",
        marginTop: 4,
        marginLeft: 25,
        fontSize: 17
      },
      input: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        marginTop: 10,
        marginHorizontal: 25,
        borderWidth: 1.5,
        paddingLeft: 20,
        borderColor: "#D9D9D9",
        borderRadius: 10,
        color: "#969696"
      },
      textInputFocused: {
        
        borderColor: '#367AFF', 
      },
      btnEye: {
        position: 'absolute',
        right: 40,
        top: 50
        //marginLeft: 10
      },
      
      
});

export default styles;