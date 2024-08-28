import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const Leage = () => {
    return (
        <View>
            <View>

            </View>
            <View style={styles.leageListContainer}>
                <View style={styles.listContainerHeading}>
                    <Text>Tommorow, 04:30</Text>
                    <View style={styles.iconContainer}>
                        <Text style={styles.iconText}>
                            XTRA
                        </Text>
                        <Text style={styles.iconText}>
                            FM
                        </Text>
                        <Text style={styles.iconText}>
                            BM
                        </Text>
                        <Text style={styles.iconText}>
                            BF
                        </Text>
                    </View>
                </View>
                <Text style={styles.leageTitle}>
                    Los Angeles Knight Riders <Text>vs</Text> Seattle Orcas
                </Text>
                <View style={styles.listContainerFooter}>
                    <View style={styles.ratingContainer}>
                        <View style={styles.ratingContainerLeft}>
                            <Text>
                                1.78
                            </Text>
                            <Text>
                                8
                            </Text>
                        </View>
                        <View style={styles.ratingContainerRight}>
                            <Text>
                                1.78
                            </Text>
                            <Text>
                                8
                            </Text>
                        </View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <View style={styles.ratingContainerLeft}>
                        </View>
                        <View style={styles.ratingContainerRight}>
                        </View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <View style={styles.ratingContainerLeft}>
                            <Text>
                                1.78
                            </Text>
                            <Text>
                                8
                            </Text>
                        </View>
                        <View style={styles.ratingContainerRight}>
                            <Text>
                                1.78
                            </Text>
                            <Text>
                                8
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Leage