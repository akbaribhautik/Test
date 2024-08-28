import {StyleSheet} from 'react-native'
import { AppColors } from '../../constants'
import { scaleSize } from '../../utills'
import Typography from '../../constants/typography'

const styles = StyleSheet.create({
    container:{
       marginHorizontal:scaleSize(16),
       backgroundColor:AppColors.app0212837,
       borderRadius:scaleSize(16),
       marginTop:40
    },
     iconStyle:{
        width:scaleSize(70),
        height:scaleSize(70),
        resizeMode:'contain'
     },
     row:{
        flexDirection:'row',
        alignItems:'center',
       
        paddingRight:scaleSize(9),  
     },
     starIcon:{
        height:scaleSize(8),
        width:scaleSize(7),
        resizeMode:'contain',
        marginTop:scaleSize(5)
     },
     textStyle:{
        marginLeft:scaleSize(10)
     },
     leftText:{
        paddingTop:scaleSize(11),
        paddingLeft:scaleSize(11)
     },
     titleStyle:{
      color:AppColors.appFFFFFF,
      ...Typography.h16Roboto_m,
      
     },
     subTitleStyle:{
      color:AppColors.app828FA4,
      ...Typography.h8Roboto_m,
      paddingTop:scaleSize(2)
     }
})

export default styles