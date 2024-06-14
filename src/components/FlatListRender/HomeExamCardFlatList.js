import React, { useState, useMemo } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { HomeStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { Lottie, } from "../../components";
import images from "../../index";

const HomeExamCardFlatList = (props) => {
   const { item, index, onPress } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const HomeStyles = useMemo(() => HomeStyle(Colors), [Colors]);

   return (
      <>
         {
            index % 2 === 0 ?
               <TouchableOpacity onPress={() => onPress()} style={[HomeStyles.cardBodyBox, { backgroundColor: item.backgroundColor }]} >
                  <Lottie
                     source={images.bganimation}
                     Lottiewidthstyle={HomeStyles.Lottiewidthstyle}
                  />
                  <Image source={item.bgimage} style={HomeStyles.bgimage} />
                  <View style={HomeStyles.TitleBox}>
                     <Text style={HomeStyles.examTitle}>{t(item.examTitle)}</Text>
                  </View>
               </TouchableOpacity>
               :
               <TouchableOpacity onPress={() => onPress()} style={[HomeStyles.cardBodyBox, HomeStyles.mrtTop, { backgroundColor: item.backgroundColor }]} >
                  <Lottie
                     source={images.bganimation}
                     Lottiewidthstyle={HomeStyles.Lottiewidthstyle}
                  />
                  <Image source={item.bgimage} style={HomeStyles.bgimage} />
                  <View style={HomeStyles.TitleBox}>
                     <Text style={HomeStyles.examTitle}>{t(item.examTitle)}</Text>
                  </View>
               </TouchableOpacity>
         }

      </>
   )
}

export default HomeExamCardFlatList