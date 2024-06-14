import React, { useMemo, } from 'react';
import { View, Text } from 'react-native';
import { ExamReviewStyle } from '../../styles';
import { SF, Colors, SH, } from '../../utils';
import { VectorIcon, Spacing, } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const AnswerStatusFlatBox = (props) => {
   const { item } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const ExamReviewStyles = useMemo(() => ExamReviewStyle(Colors), [Colors]);

   return (
      <View style={ExamReviewStyles.answerBox}>
         {
            item.answerAtemptStatus == true ? <VectorIcon icon="Feather" name="check" size={SF(50)} color={Colors.green_color} />
               :
               <VectorIcon icon="AntDesign" name="close" size={SF(50)} color={Colors.red} />
         }

         <Spacing />
         <Text style={ExamReviewStyles.questionText}>{t("Question_Label")}{' '}{item.questionNumber}</Text>
      </View>
   )
}

export default AnswerStatusFlatBox