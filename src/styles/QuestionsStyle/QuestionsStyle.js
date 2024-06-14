import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH, Colors } from '../../utils';

export default QuestionsStyle = (Colors) => StyleSheet.create({

   flexRowAlCenJusCent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   screenTitie: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(22),
      color: Colors.theme_background
   },
   wid100: {
      width: '100%'
   },
   // backArrow: {
   //    position: 'absolute',
   //    left: SW(20)
   // },
   padH20: {
      paddingHorizontal: SW(20)
   },


   container: {
      width: '100%',
      height: '100%',
      paddingHorizontal: SW(16),
   },
   questionContainer: {
      marginBottom: SH(24),
      // backgroundColor: 'blue',
      height: '100%'
   },
   questionLabelText: {
      fontSize: SF(19),
      fontFamily: Fonts.Poppins_Medium,
      marginBottom: SH(8),
      color: Colors.white_text_color,
   },
   questionText: {
      fontSize: SF(17),
      fontFamily: Fonts.Poppins_Medium,
      marginBottom: SH(8),
      color: Colors.white_text_color
   },
   optionButton: {
      borderRadius: SW(8),
      padding: SW(12),
      flexDirection: 'row',
   },
   selectedOption: {
      backgroundColor: Colors.theme_background,
   },
   optionText: {
      fontSize: SF(16),
      color: Colors.black_text_color,
      fontFamily: Fonts.Poppins_Medium,
      paddingLeft: SW(15),
      flex: 1
   },
   optionSelectText: {
      color: Colors.white_text_color,
   },
   nextButton: {
      backgroundColor: Colors.theme_background,
      borderRadius: SW(8),
      paddingVertical: SH(12),
      paddingHorizontal: SW(32),
   },
   nextButtonText: {
      color: '#FFFFFF',
      fontSize: SF(18),
      fontWeight: 'bold',
   },
   resultText: {
      fontSize: SF(20),
      fontWeight: 'bold',
      marginBottom: SH(16),
   },
   percentageText: {
      fontSize: SF(18),
      marginBottom: 8,
   },
   gradeText: {
      fontSize: SF(18),
      marginBottom: 8,
   },
   evenOddText: {
      fontSize: SF(18),
   },
   //  Start style
   questionSubContainer: {
      width: '100%',
      backgroundColor: Colors.theme_background,
      borderRadius: SW(7),
      padding: SW(10),
      minHeight: SH(150)
   },
   flexRowAlcenJusSpbtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      width: '100%',
      bottom: SH(80)
   },
   flexRowAlCen: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   suggestionText: {
      fontSize: SF(18),
      fontFamily: Fonts.Poppins_Medium,
      color: Colors.black_text_color
   },
   indicateQuestion: {
      textAlign: 'right',
      fontSize: SF(18),
      fontFamily: Fonts.Poppins_Medium,
      color: Colors.gray_text_color
   },
   progressLine: {
      height: SH(10),
      borderRadius: SW(100),
      backgroundColor: Colors.minion_yellow_color,
      position: 'absolute'
   },
   timerWidth: {
      width: '100%',
      height: SH(10),
      borderRadius: SW(100),
      backgroundColor: Colors.gray_text_color,
   },
   ResutBoxWrap: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
   },
   CircleBox: {
      backgroundColor: Colors.theme_background,
      borderRadius: SW(100),
      padding: SW(20)
   },
   titleStyle: {
      backgroundColor: Colors.white_text_color,
      borderRadius: SW(50),
      fontSize: SF(16),
      position: 'absolute',
      bottom: SH(0),
      width: SW(80),
      paddingVertical: SH(5)
   },
   Lottiewidthstyle: {
      position: 'absolute',
      top: SH(-80)
   },
   modaltitle: {
      fontSize: SF(22),
      fontFamily: Fonts.Poppins_Bold,
      color: Colors.theme_background
   },
   modalSubtitle: {
      fontSize: SF(18),
      fontFamily: Fonts.Poppins_Medium,
      color: Colors.gray_text_color,
      textAlign: 'center',
   },
   adviceBox: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%'
   },
   ReviewBtn: {
      backgroundColor: Colors.theme_rgb_color,
   },
   socialMediaBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   },
   soicalIconStyle: {
      width: SW(30),
      height: SW(30),
      marginHorizontal: SW(5)
   },
   headerTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   RiightTimeOut:{
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(17),
      color: Colors.theme_background,
      position: 'absolute',
      right: SW(20)
   },
   backArrow:{
      position: 'absolute',
      left: SW(20)
   }






});