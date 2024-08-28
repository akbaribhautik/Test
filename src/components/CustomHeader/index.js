import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import styles from './style'
import { circle, downArrow, menu, notification, profile } from '../../assets/images'

const CustomHeader = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.menuStyle} source={menu} />
            </View>

            <View>
                <View style={styles.rowContainer}>
                    <View style={styles.rowContainer}>
                      <View style={styles.priceView}>
                      <Text style={styles.totalPrice}>₹589.31</Text>
                        <Text style={styles.bonous}>Bonus: ₹0.31</Text>
                      </View>
                        <View style={styles.plusView}>
                            <Text style={styles.plusSign}>+</Text>
                        </View>
                    </View>
                    <ImageBackground style={styles.circleImage} source={circle}>
                        <Image style={styles.profileStyle} source={profile} />
                        <Image style={styles.arrowStyle} source={downArrow} />
                    </ImageBackground>
                    <Image style={styles.notificationIcon} source={notification} />
                </View>
            </View>
        </View>
    )
}

export default CustomHeader