import { View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Title from '../../components/Title';
import MyButton from '../../components/MyButton';

export default function Filmes() {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Title text="Filmes Favoritos" />
            <MyButton screen="Home" name="Go to Home" />
            <View style={styles.posteres}>
                <Image source={require('../../../assets/odiariodaprincesa.jpg')} style={styles.image}/> 
                <Text style={styles.nome}>O Diário da Princesa</Text>
                <Text style={styles.text}>
                    "O Diário da Princesa" é um filme de comédia romântica lançado em 2001, dirigido por Garry Marshall.
                    A história é baseada no livro homônimo de Meg Cabot e segue a vida de Mia Thermopolis, 
                    uma adolescente tímida e desajeitada que vive em San Francisco. 
                    Sua vida muda completamente quando descobre que é a herdeira do trono de Genóvia, um pequeno país europeu. 
                    Com a ajuda de sua avó, a rainha Clarisse, Mia enfrenta o desafio de se tornar uma princesa, 
                    equilibrando sua nova identidade real com a vida de uma adolescente comum.
                </Text>
                <Image source={require('../../../assets/legalmenteloira.jpg')} style={styles.image}/> 
                <Text style={styles.nome}>Legalmente Loira</Text>
                <Text style={styles.text}>
                    "Legalmente Loira" é uma comédia de 2001 dirigida por Robert Luketic e estrelada por Reese Witherspoon.
                    A trama segue Elle Woods, uma jovem rica e fashionista que decide se matricular na Harvard Law School 
                    para reconquistar seu ex-namorado. Contra todas as expectativas, Elle prova ser uma estudante excepcional,
                    desafiando estereótipos e mostrando que inteligência e capacidade não têm relação com a aparência. 
                    O filme é conhecido por seu humor leve e pela mensagem positiva sobre auto-estima e superação. 
                    Reese Witherspoon foi amplamente elogiada por seu papel icônico, e o filme se tornou um sucesso cultural,
                    gerando sequências.
                </Text>
                <Image source={require('../../../assets/asbranquelas.jpg')} style={styles.image}/> 
                <Text style={styles.nome}>As Branquelas</Text>
                <Text style={styles.text}>
                "As Branquelas" é uma comédia lançada em 2004, dirigida por Keenen Ivory Wayans. O filme é estrelado por Shawn Wayans e Marlon Wayans. A trama segue dois agentes do FBI, Kevin e Marcus Copeland, que se disfarçam de socialites brancas para investigar o sequestro de duas herdeiras. Usando disfarces femininos e maquiagem, eles se infiltram em um evento de alta sociedade. O filme é conhecido por seu humor irreverente e pelas situações absurdas que os protagonistas enfrentam ao tentar manter suas identidades em segredo enquanto lidam com o mundo dos ricos e famosos.
                </Text>
            </View>
        </ScrollView>
    );
}
