import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Title from '../../components/Title';
import MyButton from '../../components/MyButton';

export default function Hobby() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Title text="Hobbies" />
            <MyButton screen="Home" name="Go to Home" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.posteres}>
                    <Image source={require('../../../assets/livros.jpg')} style={styles.image}/> 
                    <Text style={styles.nome}>Ler Livros</Text>
                    <Text>Adoro ler romances, pois eles me transportam para mundos imaginários e me permitem vivenciar histórias 
                        emocionantes. Através das palavras, os romances capturam a essência das relações humanas e oferecem uma 
                        fuga envolvente da rotina.</Text>
                    <Image source={require('../../../assets/theweekend.jpg')} style={styles.image}/> 
                    <Text style={styles.nome}>Ouvir música</Text>
                    <Text>Eu amo ouvir música, com uma predileção especial pelo pop. 
                        Artistas como The Weeknd e Taylor Swift estão no topo da minha lista de favoritos, 
                        pois suas músicas têm uma capacidade única de me envolver. No entanto, minha paixão pela música 
                        não se limita apenas ao pop; também gosto de explorar outros estilos, como trap, funk e sertanejo.</Text>
                    <Image source={require('../../../assets/fanfarra.jpg')} style={styles.image}/> 
                    <Text style={styles.nome}>Tocar na Fanfarra do Sesi</Text>
                    <Text>Eu nunca tinha tocado na fanfarra do Sesi, 
                        mas este ano decidi experimentar e estou tocando muito bem. Eu adorei ter entrado.</Text>
                </View>
            </ScrollView>
        </View>
    );
}
