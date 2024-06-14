import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { PracticeMainStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { Colors, SF, SH, } from "../../utils";
import { ProgressBar, Spacing } from "../../components";
import images from "../../index";

const PracticeExamFlatList = (props) => {
   const { item, onPress } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const PracticeMainStyles = useMemo(() => PracticeMainStyle(Colors), [Colors]);

   return (
      <TouchableOpacity style={[PracticeMainStyles.wrapStyle, item.lockExam == true && PracticeMainStyles.wrapOpacityStyle]} onPress={() => onPress()} disabled={item.lockExam}>
         <View style={PracticeMainStyles.flexRowAlcnJusSbtn}>
            <View style={PracticeMainStyles.flexRowAlcn}>
               <Image source={item.img} style={PracticeMainStyles.leftimg} />
               <View style={PracticeMainStyles.padH10}>
                  <Text style={PracticeMainStyles.titleText}>{t(item.examTitle)}</Text>
                  <Text style={PracticeMainStyles.numberText}>{t("Number_Label")}: {t(item.numOfnum)}</Text>
                  <View style={[PracticeMainStyles.widthForOtherUser]}>
                     <Image source={images.practiceAvtarImg1} style={PracticeMainStyles.homeProfileImg} />
                     <Image source={images.practiceAvtarImg2} style={PracticeMainStyles.homeProfileImg} />
                     <Image source={images.practiceAvtarImg3} style={PracticeMainStyles.homeProfileImg} />
                     <Text style={PracticeMainStyles.textImgBox}>{t("+16")}</Text>
                  </View>
               </View>
            </View>
            <Image source={item.statusIcon} style={PracticeMainStyles.statusStyle} />
         </View>
         <Spacing />
         <View style={PracticeMainStyles.flexRowAlcnJusSbtn}>
            <ProgressBar
               value={item.progressValue}
               variant="determinate"
               color={Colors.gray_text_color}
               style={PracticeMainStyles.width100}
               trackColor={Colors.minion_yellow_color}
               secondary={Colors.minion_yellow_color}
            />
            <Text style={[PracticeMainStyles.percentText, { color: item.percentColor }]}>{t(item.percentage)}</Text>
         </View>
      </TouchableOpacity>
   )
}

export default PracticeExamFlatList