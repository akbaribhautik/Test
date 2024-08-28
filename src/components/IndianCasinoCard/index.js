import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { star, teenPati } from '../../assets/images'

const IndianCasinoCard = () => {
    return (
        <View style={styles.container}>
         
            <View style={styles.row}>
                <Image style={styles.iconStyle} source={teenPati} />
                <View style={styles.textStyle}>
                    <Text style={styles.titleStyle}>Teen Patti One Day</Text>
                    <Text style={styles.subTitleStyle}>Provider{'\n'}Supernova</Text>
                    <Image style={styles.starIcon} source={star} />
                </View>
            </View>
        </View>
    )
}

export default IndianCasinoCard