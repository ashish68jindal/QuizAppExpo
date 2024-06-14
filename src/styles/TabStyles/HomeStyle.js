import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH, Colors } from '../../utils';

export default HomeStyle = (Colors) => StyleSheet.create({

   homeProfileWrap: {
      backgroundColor: Colors.theme_background,
      // borderBottomLeftRadius: SW(45),
      borderBottomRightRadius: SW(40),
      paddingHorizontal: SW(20),
      paddingVertical: SH(10)
   },
   homeProfileImg: {
      width:  SW(60),
      height: SW(60),
      borderRadius: SW(100)
   },
   helloTe4xt: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(18),
      color: Colors.white_text_color
   },
   flexRowAlcn: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   nameText: {
      fontFamily: Fonts.Poppins_Bold,
      fontSize: SF(25),
      color: Colors.white_text_color,
      lineHeight: SH(30)
   },
   textBox: {
      paddingLeft: SW(20)
   },
   smallText: {
      fontFamily: Fonts.Poppins_Regular,
      fontSize: SF(16),
      color: Colors.white_text_color,
   },
   cardBodyBox: {
      borderRadius: SW(20),
      width: '45%',
      marginHorizontal: '2.5%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: SW(10),
      paddingVertical: SH(20),
      marginBottom: SH(15),
      height: SH(250)
   },

   bgimage: {
      width: SW(120),
      height: SH(120),
      position: 'absolute',
      top: SH(25)
   },
   TitleBox: {
      backgroundColor: Colors.light_gray_text_color,
      borderRadius: SW(7),
      paddingHorizontal: SW(10),
      paddingVertical: SH(7),
      width: '100%'
   },
   examTitle: {
      fontFamily: Fonts.Poppins_Bold,
      fontSize: SF(16),
      color: Colors.theme_background,
      textAlign: 'center'
   },
   mrtTop: {
      marginTop: SH(20),
   },
   Lottiewidthstyle: {
      width: '100%',
      opacity: 0.8
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
   LeadDropdown: {
      minHeight: SH(35),
      height: SH(40),
      borderColor: Colors.gray_text_color,
   },
   btnDisable: {
      opacity: ' 0.5',
      backgroundColor: 'red'
   },
   myExamStyle: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(19),
      fontWeight: '700',
      color: Colors.black_text_color,
      textAlign: 'center'
   }








});