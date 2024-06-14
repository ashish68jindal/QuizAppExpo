import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AnswerStyle } from '../../styles';
import { SF, SH,examNumber1Answer } from '../../utils';
import { Container, VectorIcon, Spacing} from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';

const Answer = (props) => {
   const { navigation } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const AnswerStyles = useMemo(() => AnswerStyle(Colors), [Colors]);
   const [questions, setQuestions] = useState(examNumber1Answer);
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

   const handleNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
         setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
         navigation.navigate(RouteName.HOME_SCREEN)
      }
   };

   const renderQuestion = (question, index) => {
      const { correctAnswer, selectedAnswer } = question;
      const isCorrect = correctAnswer === selectedAnswer;

      return (
         <View key={index} style={AnswerStyles.questionContainer}>
            <Spacing />
            <View style={AnswerStyles.questionHeightBox}>
               <View style={AnswerStyles.questionSubContainer}>
                  <Text style={AnswerStyles.questionLabelText}>{t(question.questionLabel)}</Text>
                  <Text style={AnswerStyles.questionText}>{t(question.question)}</Text>
               </View>
               <Spacing />
               <Text style={AnswerStyles.indicateQuestion}>{currentQuestionIndex + 1}{' '}{t("Of_Label")}{' '}{questions.length}</Text>
            </View>
            <View style={AnswerStyles.questionOptionHeightBox}>
               {question.options.map((option, optionIndex) => (
                  <View
                     key={optionIndex}
                     style={AnswerStyles.optionButton}>
                     <VectorIcon icon="Feather"
                        name={option === selectedAnswer ? "check-circle" : "circle"}
                        color={option === selectedAnswer ? isCorrect ? Colors.green_color : Colors.red : Colors.theme_background && option === correctAnswer && Colors.green_color} size={SF(30)} />
                     <Text style={[option === selectedAnswer
                        ? isCorrect ? AnswerStyles.correctOption : AnswerStyles.incorrectOption
                        : AnswerStyles.optionText,
                     option === correctAnswer && AnswerStyles.correctOption
                     ]}>{t(option)}</Text>
                  </View>
               ))}
               <View style={AnswerStyles.hrline}></View>
               <View>
                  <Spacing />
                  <TouchableOpacity style={AnswerStyles.flexRowAlCen}>
                     <VectorIcon icon="Entypo" name="info" color={Colors.minion_yellow_color} size={SF(20)} />
                     <Text style={AnswerStyles.suggestionText}>{t("Answer_Label")}</Text>
                  </TouchableOpacity>
                  <Text style={AnswerStyles.answerSuggest}>{t(question.answerBrief)}</Text>
               </View>
            </View>
            <Spacing />
         </View >
      );
   };

   const renderCurrentQuestion = () => {
      const currentQuestion = questions[currentQuestionIndex];
      return (
         <View>
            {renderQuestion(currentQuestion, currentQuestionIndex)}
         </View>
      );
   };

   return (
      <Container>

         <Spacing />
         <View style={[AnswerStyles.headerViewBox, AnswerStyles.padH20]}>
            <TouchableOpacity style={AnswerStyles.leftHead} onPress={() => navigation.navigate(RouteName.EXAM_REVIEW)}>
               <VectorIcon icon="AntDesign" name="close" size={SF(28)} color={Colors.black_text_color} />
            </TouchableOpacity>
            <View style={AnswerStyles.centerHead}>
               <Text style={AnswerStyles.reviewText}>{t("Answer_Label")}</Text>
            </View>
            <TouchableOpacity style={[AnswerStyles.leftHead, AnswerStyles.rightHead]} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
               <VectorIcon icon="Feather" name="bell" size={SF(25)} color={Colors.black_text_color} />
            </TouchableOpacity>
         </View>
         <Spacing space={SH(20)} />
         <ScrollView>
            <View style={AnswerStyles.container}>{renderCurrentQuestion()}</View>
            <Spacing space={SH(50)} />
         </ScrollView>

         <View style={AnswerStyles.btnBox}>
            <TouchableOpacity
               style={AnswerStyles.nextButton}
               onPress={handleNextQuestion}
            >
               <Text style={AnswerStyles.nextButtonText}>{t("Next_Text")}</Text>
            </TouchableOpacity>
         </View>
      </Container>
   )
}

export default Answer