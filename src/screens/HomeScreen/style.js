import { StyleSheet, Dimensions } from 'react-native'
import { AppColors } from '../../constants'
import { scaleSize } from '../../utills'
import Typography from '../../constants/typography'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.app121a24,

  },
  bannerView: {
    marginLeft: scaleSize(15),
    marginRight: scaleSize(16),
    height: scaleSize(164),
    borderRadius:scaleSize(8),
  },
  bannerStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius:scaleSize(8),
  },
  wordContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgeStyle:{
   width:scaleSize(70),
   height:scaleSize(70),
   resizeMode:'contain',
   marginHorizontal:scaleSize(5),
   
  },
  featureGameContainer:{
   marginLeft:scaleSize(10),
   padding: scaleSize(10),
   borderRadius: scaleSize(8),
   backgroundColor:AppColors.app0212837

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:scaleSize(9)
  },

  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height:scaleSize(50)
  },
  list: {
    flexGrow: 1,
  },
  tabContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  word: {
    color:AppColors.app828FA4,
    ...Typography.h12Roboto_m,
    paddingHorizontal:scaleSize(8)
  },
  tabArrowIcon:{
   width:scaleSize(17),
   height:scaleSize(28)
  },
  arrowButton: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: scaleSize(16),
    
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scaleSize(10),
    borderRadius: scaleSize(8),
    backgroundColor:AppColors.app0212837
  },
  rowGameLayout:{
    flexDirection: 'row',
    padding: scaleSize(10),
    paddingLeft:scaleSize(0),
    borderRadius: scaleSize(8),
    
  },
  image: {
    width: scaleSize(31),
    height: scaleSize(29),
    marginRight: scaleSize(10),
    resizeMode:'contain'
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    marginBottom: scaleSize(4),
    ...Typography.h11Roboto_m,
    color:AppColors.appFFFFFF
  },
  subTitle: {
    color:AppColors.appFF7B08,
    ...Typography.h6Roboto_m,
  },
  casinoTitle:{
    color:AppColors.appC0CCDF,
    ...Typography.h12Roboto_m,
    marginTop:scaleSize(27)
  },
  buttonText:{
    marginHorizontal:scaleSize(34),
    color:AppColors.app828FA4,
    alignSelf:'center',
    ...Typography.h10Roboto_m,
    paddingTop:scaleSize(82)
  },
  copyRightText:{
    marginHorizontal:scaleSize(34),
    color:AppColors.app828FA4,
    alignSelf:'center',
    ...Typography.h11Roboto_m,
    paddingTop:scaleSize(13)
  },
  imageContainer:{
    marginHorizontal:scaleSize(8),
    width:scaleSize(53.76),
    height:scaleSize(30.35),
     resizeMode:'contain'
  },
  playTextStyle:{
   color:AppColors.appD9D9D9,
   ...Typography.h10Roboto_m
  },
  featuredTextStyle:{
    color:AppColors.appD9D9D9,
    ...Typography.h22Roboto_m
  },
  
})

export default styles