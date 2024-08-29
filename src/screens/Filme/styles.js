import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
     
    },
    scrollViewContent: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#eec0c8',
    },
    text: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center', 
        paddingHorizontal: 10, 
    },
    image: {
        width: 250,
        height: 350,
        borderRadius: 35,
        marginVertical: 10,
        alignSelf: 'center'

    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginVertical: 5,
    }
});

export default styles;
