import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { PracticeMainStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const PracticeExamFlatList = (props) => {
   const { item, onPress } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const PracticeMainStyles = useMemo(() => PracticeMainStyle(Colors), [Colors]);

   return (
      <TouchableOpacity style={[PracticeMainStyles.wrapStyle, item.lockExam == true && PracticeMainStyles.wrapOpacityStyle]} onPress={() => onPress()} disabled={item.lockExam}>
         <View style={PracticeMainStyles.flexRowAlcnJusSbtn}>
            <View style={PracticeMainStyles.flexRowAlcn}>
               <Image source={item.img} style={PracticeMainStyles.leftimg} resizeMode={'contain'} />
               <View style={PracticeMainStyles.padH10}>
                  <Text style={PracticeMainStyles.titleText}>{t(item.examTitle)}</Text>
               </View>
            </View>
         </View>
      </TouchableOpacity>
   )
}

export default PracticeExamFlatList