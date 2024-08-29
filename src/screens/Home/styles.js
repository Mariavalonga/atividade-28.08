import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#eec0c8'
    },
    text: {
        fontSize: 15,
        marginBottom: 10,
    },
    text2: {
        fontSize: 15,
        alignItems: 'center',
        marginBottom: 10,
        textAlign: 'center',
        marginVertical: 10,
        alignSelf: 'center'
    },

    image: {
        width: 250,
        height: 250,
        borderRadius: 25,
        marginBottom: 10
    }, 
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    }

})
export default styles