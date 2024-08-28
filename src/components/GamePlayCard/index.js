import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { banner, teenPati } from '../../assets/images'

const GamePlayCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={banner} />
    <View style={styles.row}>
        <View style={styles.row}>
        <Image style={styles.leftIcon}  source={teenPati}/>
         <View style={styles.viewAlign}>
         <Text style={styles.title}>Aviator</Text>
         <Text style={styles.subTitle}>Instant Game, Instant Win!</Text>
         </View>
        </View>
         <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Play Now</Text>
     </TouchableOpacity>
    </View>
    </View>
  )
}

export default GamePlayCard