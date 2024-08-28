import {StyleSheet} from 'react-native'
import { AppColors } from '../../constants'
import { scaleSize } from '../../utills'
import Typography from '../../constants/typography'

const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       paddingLeft:scaleSize(12),
       paddingRight:scaleSize(16),
       paddingTop:scaleSize(7),
       height:scaleSize(52),
       backgroundColor:AppColors.app0212837
    },
    menuStyle:{
        width:scaleSize(21),
        height:scaleSize(21),
        resizeMode:'contain'
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    totalPrice:{
     color:AppColors.appFFFFFF,
     ...Typography.h8Roboto_m
    },
    bonous:{
        color:AppColors.appFFFFFF,
        fontSize:3.27
    },
    circleImage:{
        width:scaleSize(30),
        height:scaleSize(30),
        justifyContent:'center',
        alignItems:'center',
        marginRight:scaleSize(10)
    },
    profileStyle:{
        width:scaleSize(24),
        height:scaleSize(24),
        resizeMode:'contain',
        borderRadius:scaleSize(12)
    },
    arrowStyle:{
        width:scaleSize(7),
        height:scaleSize(7),
        resizeMode:'contain',
        position:'absolute',
        right:0,
        bottom:0
    },
    notificationIcon:{
        width:scaleSize(18),
        height:scaleSize(18),
        resizeMode:'contain'
    },
    plusView:{
       height:scaleSize(18),
       width:scaleSize(18),
       backgroundColor:AppColors.app3790FB,
       justifyContent:'center',
       alignItems:'center',
       borderTopRightRadius:scaleSize(3.27),
       borderBottomRightRadius:scaleSize(3.27),
       marginRight:scaleSize(10.18)
    },
    plusSign:{
        color:AppColors.appFFFFFF,  
    },
    priceView:{
        height:scaleSize(18),
        backgroundColor:AppColors.app464965,
        paddingLeft:scaleSize(8.18),
        paddingRight:scaleSize(7.64),
        borderTopLeftRadius:scaleSize(3.27),
        borderBottomLeftRadius:scaleSize(3.27)
    }

})

export default styles