import { StyleSheet, Platform } from 'react-native';
import { SF, Fonts, SW, SH, Colors } from '../../utils';

export default ExamReviewStyle = (Colors) => StyleSheet.create({

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
   redtext: {
      color: Colors.red
   },
   centerHead: {
      width: '60%',
   },
   leftHead: {
      width: '20%'
   },
   rightHead: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
   },
   flexRowAlcen: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   examTime: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(16),
      color: Colors.gray_text_color,
      lineHeight: SH(20),
      paddingLeft: SW(5)
   },
   questionText: {
      fontFamily: Fonts.Poppins_Medium,
      fontSize: SF(16),
      color: Colors.gray_text_color,
      lineHeight: SH(20),
   },
   answerBox: {
      width: '27.33%',
      justifyContent: 'center',
      backgroundColor: Colors.white_text_color,
      alignItems: 'center',
      shadowColor: Colors.theme_background,
      shadowOffset: {
         width: 0,
         height: Platform.OS === 'ios' ? 2 : 5,
         minHeight: '100%',
      },
      shadowOpacity: 1,
      shadowRadius: Platform.OS === 'ios' ? 2 : 50,
      elevation: Platform.OS === 'ios' ? 1 : 10,
      borderRadius: SW(7),
      padding: SW(10),
      marginHorizontal: '3%',
      marginBottom: SH(10)
   },
   answerBtnBox: {
      position: 'absolute',
      bottom: SH(0),
      width: '100%',
      paddingVertical: SH(5),
      paddingHorizontal: SW(20),
      backgroundColor: Colors.white_text_color,
      shadowColor: '#b5b2b2',
      shadowOffset: {
         width: 0,
         height: Platform.OS === 'ios' ? 2 : 5,
         minHeight: '100%',
      },
      shadowOpacity: 1,
      shadowRadius: Platform.OS === 'ios' ? 2 : 50,
      elevation: Platform.OS === 'ios' ? 1 : 6,
   }




});