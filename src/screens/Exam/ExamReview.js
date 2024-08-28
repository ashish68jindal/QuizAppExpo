import React, { useMemo, } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ExamReviewStyle } from '../../styles';
import { SF,SH } from '../../utils';
import { Container, VectorIcon, Spacing, AnswerStatusFlatBox, Button } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';

const ExamReview = (props) => {
   const { navigation,route } = props;
   const { questions } = route.params;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const ExamReviewStyles = useMemo(() => ExamReviewStyle(Colors), [Colors]);
   const atemptQuestion = 12;
   const totalQuestion = 15;
   const examTime = "5:00";

   return (
      <Container>
         <Spacing />
         <View style={[ExamReviewStyles.headerViewBox, ExamReviewStyles.padH20]}>
            <TouchableOpacity style={ExamReviewStyles.leftHead} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
               <VectorIcon icon="AntDesign" name="close" size={SF(28)} color={Colors.black_text_color} />
            </TouchableOpacity>
            <View style={ExamReviewStyles.centerHead}>
               <Text style={ExamReviewStyles.reviewText}>{t("Review_Label")}</Text>
            </View>
            <TouchableOpacity style={[ExamReviewStyles.leftHead, ExamReviewStyles.rightHead]} onPress={() => navigation.navigate(RouteName.NOTIFICTION_SCREEN)}>
               <VectorIcon icon="Feather" name="bell" size={SF(25)} color={Colors.black_text_color} />
            </TouchableOpacity>
         </View>
         <Spacing space={SH(20)} />
         <View style={[ExamReviewStyles.headerViewBox, ExamReviewStyles.padH20]}>
            <Text style={ExamReviewStyles.reviewTotalQuestion}><Text style={[ExamReviewStyles.reviewTotalQuestion, atemptQuestion !== totalQuestion && ExamReviewStyles.redtext]}>{atemptQuestion}</Text>/{totalQuestion}</Text>
            <View style={ExamReviewStyles.centerHead}>
               <Text style={ExamReviewStyles.reviewText}>{t("You_Are_Right_Label")}</Text>
               <Text style={ExamReviewStyles.reviewText}>{"70%"}</Text>
            </View>
            <View style={[ExamReviewStyles.leftHead, ExamReviewStyles.rightHead, ExamReviewStyles.flexRowAlcen]}>
               <VectorIcon icon="Feather" name="clock" size={SF(20)} color={Colors.gray_text_color} />
               <Text style={ExamReviewStyles.examTime}>{examTime}</Text>
            </View>
         </View>
         <Spacing />

         <FlatList
            data={questions}
            renderItem={({ item, index }) => (<AnswerStatusFlatBox item={item} index={index}/>)}
            numColumns={3}
         />
         <View style={ExamReviewStyles.answerBtnBox}>
            <Button title={t("Answer_Label")} onPress={() => navigation.navigate(RouteName.ANSWER,{questions})} />
         </View>
      </Container>
   )
}

export default ExamReview