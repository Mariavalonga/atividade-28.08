import { View, Text} from 'react-native'
import React from 'react'
import styles  from './styles.js'

const Title = ({ text }) => {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}

export default Title