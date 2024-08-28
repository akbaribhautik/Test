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
    leageListContainer: {
        marginHorizontal: scaleSize(16),
        padding: scaleSize(10),
        borderRadius: scaleSize(8),
        backgroundColor: AppColors.app0212837,
        marginTop: scaleSize(10),
       
    },
    listContainerHeading: {
        flexDirection:"row"
    },
    listContainerFooter: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    iconContainer: {
        flexDirection:"row",
    },
    iconText: {
        color: AppColors.appFFFFFF
    },
    leageTitle: {
        color: AppColors.appFFFFFF
    },
    ratingContainer: {
        flexDirection: "row",
        width: "30%"
    },
    ratingContainerLeft: {
        backgroundColor: AppColors.app3790FB, 
        width:"50%",
        borderRadius: scaleSize(4)
    },
    ratingContainerRight: {
        backgroundColor: AppColors.appD141F6,
        width:"50%",
        borderRadius: scaleSize(4)
    }
})

export default styles