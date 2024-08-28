import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { model, whatsappText } from '../../assets/images'
import styles from './style'

const ModelView = () => {
  return (
    <View style={styles.container}>
     <Image style={styles.modelImage} source={model}  />
   <View>
   <Image style={styles.whatsappTextIcon} source={whatsappText}  />
     <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>GET ID NOW</Text>
     </TouchableOpacity>
   </View>
    </View>
  )
}

export default ModelView