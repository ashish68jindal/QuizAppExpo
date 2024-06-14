import React, { useMemo, } from 'react';
import { View, Text, Image } from 'react-native';
import { QuestionsStyle } from '../../styles';
import { SF, Colors, SH, SW } from '../../utils';
import { Spacing, CircleCount, Lottie, Button } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';
import images from '../../index';

const QuestionResultShowFun = (props) => {
   const { grade, percentage, currentQuestionIndex, questions, ExamHandlePress, PracticeMainHandlePress } = props;
   const { navigation } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const QuestionsStyles = useMemo(() => QuestionsStyle(Colors), [Colors]);
   return (
      <View style={QuestionsStyles.ResutBoxWrap}>
         <Lottie source={images.congratsAnimation} Lottiewidthstyle={QuestionsStyles.Lottiewidthstyle} />
         <View style={QuestionsStyles.CircleBox}>
            <CircleCount
               title={grade}
               value={percentage}
               radius={70}
               progressValueColor={Colors.white_text_color}
               activeStrokeColor={Colors.white_text_color}
               inActiveStrokeColor={Colors.white_rgba}
               inActiveStrokeOpacity={0.5}
               inActiveStrokeWidth={10}
               activeStrokeWidth={15}
               titleColor={Colors.red}
               duration={2000}
               maxValue={100}
               valueSuffix={'%'}
               titleStyle={QuestionsStyles.titleStyle}
               subtitle={currentQuestionIndex + ' ' + "/" + ' ' + questions.length}
            />
         </View>
         <Spacing space={SH(30)} />
         {
            percentage < 70 ?
               <View style={QuestionsStyles.adviceBox}>
                  <Text style={QuestionsStyles.modaltitle}>{t("Dont_Give_Up_Label")}</Text>
                  <Spacing />
                  <Text style={QuestionsStyles.modalSubtitle}>{t("StuduMore_Label")}</Text>
               </View>
               :
               <View style={QuestionsStyles.adviceBox}>
                  <Text style={QuestionsStyles.modaltitle}>{t("Your_Are_Awsome_Label")}</Text>
                  <Spacing />
                  <Text style={QuestionsStyles.modalSubtitle}>{t("Congratulation_Label")}</Text>
                  <Spacing />
                  <View style={QuestionsStyles.socialMediaBox}>
                     <Image source={images.gicon} style={QuestionsStyles.soicalIconStyle} resizeMode="contain" />
                     <Image source={images.ficon} style={QuestionsStyles.soicalIconStyle} resizeMode="contain" />
                     <Image source={images.ticon} style={QuestionsStyles.soicalIconStyle} resizeMode="contain" />
                  </View>
               </View>
         }
         <Spacing space={SH(30)} />
         <Button title={t("Review_Label")} onPress={() => ExamHandlePress()} buttonStyle={QuestionsStyles.ReviewBtn} />
         <Spacing space={SH(30)} />
         <Button title={t("Go_Exam_Label")} onPress={() => PracticeMainHandlePress()} />
      </View>
   )
}

export default QuestionResultShowFun