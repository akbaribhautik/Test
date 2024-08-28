import { StyleSheet } from 'react-native'
import { scaleSize } from '../../utills'
import { AppColors } from '../../constants'
import Typography from '../../constants/typography'

const styles = StyleSheet.create({
    container: {
        marginHorizontal: scaleSize(16),
        padding: scaleSize(10),
        borderRadius: scaleSize(8),
        backgroundColor: AppColors.app0212837,
        marginTop: scaleSize(10),
        alignItems: 'center'
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageStyle: {
        width: scaleSize(95),
        height: scaleSize(95),
        resizeMode: 'contain',
        borderRadius: scaleSize(6),
        marginTop: scaleSize(20)
    },
    playTextStyle: {
        color: AppColors.appD9D9D9,
        ...Typography.h10Roboto_m
    },
    featuredTextStyle: {
        color: AppColors.appD9D9D9,
        ...Typography.h22Roboto_m
    },
    button: {
        height: scaleSize(32),
        width: scaleSize(65),
        backgroundColor: AppColors.app3790FB,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleSize(4),
        marginTop: scaleSize(10),


    },
    buttonText: {
        color: AppColors.appFFFFFF,
        ...Typography.h10Roboto_m
    }
})

export default styles