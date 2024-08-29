import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import styles from './styles'
import MyButton from '../../components/MyButton'
import Title from '../../components/Title'
export default function Totoro() {

  return (
    <View style={styles.container}>
      <Title text="Mundo da Valonga" />
      <Image source={require('../../../assets/euu.jpeg')} style={styles.image}/> 
      <Text style={styles.nome}>Maria Eduarda Valonga</Text>
      <Text style={styles.text}>17 anos</Text>
      <Text style={styles.text2}>Minha cachorra Kika é minha companheira fiel, e eu não troco seu carinho por nada. 
        Estou me preparando para prestar vestibular em fonoaudiologia, uma área que me fascina. 
        Atualmente, estou imerso no mundo do desenvolvimento de sistemas no SENAI Valinhos, onde a tecnologia me desafia 
        e inspira. E quando o assunto é diversão, nada supera uma boa partida de truco, meu jogo favorito!</Text>
      <MyButton screen="Filmes" name="Filmes Favoritos" />
      <MyButton screen="Hobby" name="Hobbies" />
    </View>
  )
}