import { StyleSheet } from "react-native";
import { AppColors } from "../../constants";
import { scaleSize } from "../../utills";
import Typography from "../../constants/typography";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: scaleSize(16),
        backgroundColor: AppColors.app0212837,
        padding:scaleSize(6),
        borderRadius:scaleSize(16)

    },
    imageStyle: {
        width: '100%',
        height: scaleSize(164),
        resizeMode: 'cover',
        borderRadius:scaleSize(8)
        
    },
    leftIcon: {
        width: scaleSize(35),
        height: scaleSize(35),
        resizeMode: 'contain'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:scaleSize(7),
        alignItems:'center'
        
    },
    button:{
        height:scaleSize(32),
        width:scaleSize(118),
        backgroundColor:AppColors.app3790FB,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:scaleSize(4),
       alignSelf:'center',
       
    },
    buttonText:{
        color:AppColors.appFFFFFF,
        ...Typography.h10Roboto_m
    },
    title:{
     ...Typography.h16Roboto_m,
     color:AppColors.appFFFFFF
    },
    subTitle:{
     ...Typography.h7Roboto_m,
     color:AppColors.app828FA4
    },
    viewAlign:{
        marginLeft:scaleSize(7)
    }
})

export default styles