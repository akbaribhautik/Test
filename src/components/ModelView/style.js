import { StyleSheet } from 'react-native'
import { scaleSize } from '../../utills'
import { AppColors } from '../../constants'
import Typography from '../../constants/typography'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
       alignItems:'center',
       paddingLeft:scaleSize(12)
    },
    modelImage: {
        width: scaleSize(129),
        height: scaleSize(149),
        resizeMode:'contain'
    },
    whatsappTextIcon:{
        width:scaleSize(180),
       height:scaleSize(44),
       resizeMode:'contain',
       marginLeft:scaleSize(20.32)
      
    },
    button:{
        height:scaleSize(32),
        width:scaleSize(118),
        backgroundColor:AppColors.app3790FB,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:scaleSize(4),
        marginTop:scaleSize(26),
        marginLeft:scaleSize(20),
       alignSelf:'center'
    },
    buttonText:{
        color:AppColors.appFFFFFF,
        ...Typography.h10Roboto_m
    }
})

export default styles