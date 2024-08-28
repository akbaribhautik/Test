import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { game3 } from '../../assets/images'

const GameList = () => {
  return (
    <View style={styles.container}>
        <View style={{alignSelf:'flex-start'}}>
            <Text style={styles.playTextStyle}>LET"S Play</Text>
            <Text style={styles.featuredTextStyle}>E-SPORTS</Text>
        </View>
        <View style={styles.listContainer}>
            <Image style={styles.imageStyle} source={game3} />
        </View>
        <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>PLAY</Text>
     </TouchableOpacity>
    </View>
  )
}

export default GameList
