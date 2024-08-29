import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eec0c8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#eec0c8',
        padding: 10,
    },
    posteres: {
        alignItems: 'center',
        
    },
    image: {
        width: 250,
        height: 350,
        borderRadius: 35,
        marginVertical: 10, 
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 5, 
    },
});

export default styles;
