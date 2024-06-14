import { Platform, StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH, Colors } from '../../utils';


export default LeaderboardStyle = (Colors) => StyleSheet.create({

   wraper: {
      marginHorizontal: SW(10),
   },
   homeProfileImg: {
      width: SW(50),
      height: SW(50),
      borderRadius: SW(100)
   },
   LeaderboardBoxStyle: {
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
      borderRadius: SW(3),
      overflow: 'hidden',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: SH(10),
      marginVertical: SH(15),
      paddingHorizontal: SW(15),
      paddingVertical: SH(10)
   },
   nameTetx: {
      fontFamily: Fonts.Poppins_Medium,
      color: Colors.black_text_color,
      fontSize: SF(18),
      fontWeight: '700',
      paddingLeft: SW(10)
   },
   flexRowAlcen: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   xpGainText: {
      fontFamily: Fonts.Poppins_Medium,
      color: Colors.gray_text_color,
      fontSize: SF(16),
      paddingLeft: SW(10)
   },
   srnumStyle: {
      width: SW(27),
      height: SW(27),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: SW(100),
      borderWidth: SW(0.5),
      borderColor: Colors.theme_background,
   },

   srNumText: {
      fontFamily: Fonts.Poppins_Bold,
      color: Colors.theme_background,
      fontSize: SF(17),
      lineHeight: SH(23)
   },
   sideBtnBox: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginVertical: SH(15),
      marginHorizontal: SW(10),
      flex: 1,
      borderTopRightRadius: SW(7),
      borderBottomRightRadius: SW(7),
      overflow: 'hidden'
   },
   sideSUbBtn: {
      backgroundColor: Colors.theme_background,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: SW(60),
   },
   colorRed: {
      backgroundColor: Colors.red
   },
   rankIocn: {
      width: SW(25),
      height: SW(25),
      marginRight: SW(10)
   }




});