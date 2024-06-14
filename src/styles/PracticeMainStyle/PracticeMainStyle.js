import { Platform, StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH, Colors } from '../../utils';

export default PracticeMainStyle = (Colors) => StyleSheet.create({

   wrapBoxTop: {
      backgroundColor: Colors.theme_background,
      borderBottomRightRadius: SW(40),
      paddingHorizontal: SW(20),
      paddingVertical: SH(10)
   },
   homeProfileImg: {
      width: SW(20),
      height: SW(20),
      borderRadius: SW(100)
   },
   helloText: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(18),
      color: Colors.white_text_color
   },
   flexRowAlcn: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   flexRowAlcnJusSbtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   headingText: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(18),
      color: Colors.white_text_color
   },
   subHeadingText: {
      fontFamily: Fonts.Poppins_Regular,
      fontSize: SF(16),
      color: Colors.white_text_color
   },
   width50: {
      width: '50%'
   },
   bgimage: {
      width: '100%',
      height: SH(150)
   },
   leftimg: {
      width: SW(80),
      height: SH(80),
      borderRadius: SW(10)
   },
   titleText: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(16),
      color: Colors.black_text_color,
      lineHeight: SH(22)
   },
   numberText: {
      fontFamily: Fonts.Poppins_Regular,
      fontSize: SF(16),
      color: Colors.gray_text_color
   },
   padH10: {
      paddingHorizontal: SW(10)
   },
   widthForOtherUser: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   avtarStyle: {
      marginLeft: SW(-5)
   },
   textBgAvtar: {
      backgroundColor: Colors.theme_background
   },
   textofAvtar: {
      fontSize: SF(10),
   },
   statusStyle: {
      width: SW(50),
      height: SW(50)
   },
   wrapStyle: {
      marginHorizontal: SW(10),
      shadowColor: '#b5b2b2',
      shadowOffset: {
         width: 0,
         height: Platform.OS === 'ios' ? 2 : 5,
         minHeight: '100%',
      },
      shadowOpacity: 1,
      shadowRadius: Platform.OS === 'ios' ? 2 : 50,
      elevation: Platform.OS === 'ios' ? 1 : 6,
      overflow: 'hidden',
      borderRadius: SW(7),
      paddingVertical: SH(10),
      paddingHorizontal: SW(10),
      backgroundColor: Colors.white_text_color,
      marginVertical: SH(10)
   },
   wrapOpacityStyle: {
      opacity: 0.3,
   },
   width100: {
      width: '85%',
      borderRadius: SW(100),
      height: SH(10)
   },
   percentText: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(16),
      color: Colors.black_text_color,
   },
   ModalInContainer: {
      backgroundColor: Colors.white_text_color,
      padding: SW(15),
      borderRadius: SW(7)
   },
   closeBtnForModal: {
      position: 'absolute',
      right: SW(10),
      top: SH(10)
   },
   modalImg: {
      width: SW(150),
      height: SH(150)
   },
   centerModeClass: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   updateText: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(16),
      color: Colors.gray_text_color,
      textAlign: 'center'
   },
   myExamStyle: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(19),
      fontWeight: '700',
      color: Colors.black_text_color,
      textAlign: 'center'
   },
   textImgBox: {
      width: SW(20),
      height: SW(20),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.gray_text_color,
      borderRadius: SW(100),
      color: Colors.white_text_color,
      fontSize: SF(10),
      textAlign: 'center',
      textAlignVertical: 'center'
   }









});