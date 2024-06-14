import { StyleSheet, Platform } from 'react-native';
import { SF, Fonts, SW, SH, Colors } from '../../utils';

export default AnswerStyle = (Colors) => StyleSheet.create({

   headerViewBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   padH20: {
      paddingHorizontal: SW(20)
   },
   reviewText: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(18),
      color: Colors.black_text_color,
      textAlign: 'center'
   },
   reviewTotalQuestion: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(18),
      color: Colors.theme_background,
      width: '20%'
   },

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
   backArrow: {
      position: 'absolute',
      left: SW(20)
   },
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
      // height: '100%'
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
   correctAnsText: {
      fontSize: SF(16),
      color: Colors.green_color,
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
      width: '100%'
   },
   nextButtonText: {
      color: Colors.white_text_color,
      fontSize: SF(18),
      fontWeight: 'bold',
      textAlign: 'center'
   },
   btnBox: {
      backgroundColor: Colors.white_text_color,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      width: '100%',
      bottom: SH(0),
      paddingVertical: SH(10),
      paddingHorizontal: SW(20)
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
   questionHeightBox: {
      // height: '40%'
   },
   questionOptionHeightBox: {
      // backgroundColor: 'red',
      // height: '100%',
      // overflow: 'scroll'
   },
   hrline: {
      borderBottomWidth: SW(1),
      borderBottomColor: Colors.gray_text_color,
      width: '100%',
      height: SH(1)
   },

   flexRowAlcenJusSpbtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      width: '100%',
      bottom: SH(100)
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
   correctOption: {
      fontSize: SF(16),
      fontFamily: Fonts.Poppins_Medium,
      paddingLeft: SW(15),
      flex: 1,
      color: Colors.green_color,
   },
   incorrectOption: {
      fontSize: SF(16),
      fontFamily: Fonts.Poppins_Medium,
      paddingLeft: SW(15),
      flex: 1,
      color: Colors.red,
   },
   height100: {
      height: '100%'
   },
   answerSuggest: {
      fontSize: SF(16),
      fontFamily: Fonts.Poppins_Medium,
      color: Colors.gray_text_color,

   }

});