import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import TextButton from '../TextButton'
import styles from './styles'

const MyButton = ({ screen, name}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(screen)} >
        <TextButton body={name} />
    </TouchableOpacity>
  )
}

export default MyButton