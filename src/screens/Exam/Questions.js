import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import { QuestionsStyle } from '../../styles';
import { SF, Colors, SH, examNumber1, SW } from '../../utils';
import { Container, VectorIcon, Spacing, CircleCount, Lottie, Button, QuestionResultShowFun } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';
import images from '../../index';

const Questions = (props) => {
   const { navigation } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const QuestionsStyles = useMemo(() => QuestionsStyle(Colors), [Colors]);
   const [questions, setQuestions] = useState(examNumber1);
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const [progress] = useState(new Animated.Value(0));

   const [secondsRemaining, setSecondsRemaining] = useState(5 * 60);

   useEffect(() => {
      startProgress();
      const timer = setInterval(() => {
         setSecondsRemaining(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => {
         resetProgress();
         clearInterval(timer);
      };
   }, []);
   const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
   };


   const startProgress = () => {
      Animated.timing(progress, {
         toValue: 1,
         duration: 15000,
         useNativeDriver: false,
      }).start(() => {
         resetProgress();
      });
   };

   const resetProgress = () => {
      progress.setValue(0);
   };

   const width = progress.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
      extrapolate: 'clamp',
   });

   const handleOptionPress = (questionIndex, optionIndex) => {
      const updatedQuestions = [...questions];
      updatedQuestions[questionIndex].selectedAnswer = updatedQuestions[questionIndex].options[optionIndex];
      setQuestions(updatedQuestions);
   };

   const handleNextQuestion = () => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
   };

   const handlePreviousQuestion = () => {

      if (currentQuestionIndex >= 1) {
         setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
   };

   const calculatePercentage = () => {
      const totalQuestions = questions.length;
      let correctAnswers = 0;

      questions.forEach(question => {
         if (question.selectedAnswer === question.correctAnswer) {
            correctAnswers++;
         }
      });

      return (correctAnswers / totalQuestions) * 100;
   };

   const calculateGrade = percentage => {
      if (percentage >= 90) {
         return t("XPLabel_1");
      } else if (percentage >= 80) {
         return t("XPLabel_2");
      } else if (percentage >= 70) {
         return t("XPLabel_3");
      } else if (percentage >= 60) {
         return t("XPLabel_4");
      } else {
         return t("XPLabel_5");
      }
   };

   const renderQuestion = (question, index) => {
      return (
         <View key={index} style={QuestionsStyles.questionContainer}>
            <View style={QuestionsStyles.timerWidth}>
               <Animated.View style={[QuestionsStyles.progressLine, { width }]} />
            </View>
            <Spacing />
            <View style={QuestionsStyles.questionHeightBox}>
               <View style={QuestionsStyles.questionSubContainer}>
                  <Text style={QuestionsStyles.questionLabelText}>{t(question.questionLabel)}</Text>
                  <Text style={QuestionsStyles.questionText}>{t(question.question)}</Text>
               </View>
               <Spacing />
               <Text style={QuestionsStyles.indicateQuestion}>{currentQuestionIndex + 1}{' '}{t("Of_Label")}{' '}{questions.length}</Text>
            </View>
            <View style={QuestionsStyles.questionOptionHeightBox}>
               {question.options.map((option, optionIndex) => (
                  <TouchableOpacity
                     key={optionIndex}
                     style={QuestionsStyles.optionButton}
                     onPress={() => handleOptionPress(index, optionIndex)}
                  >
                     <VectorIcon icon="Feather" name={question.selectedAnswer === option ? "check-circle" : "circle"} color={question.selectedAnswer === option ? Colors.green_color : Colors.theme_background} size={SF(30)} />
                     <Text style={QuestionsStyles.optionText}>{t(option)}</Text>
                  </TouchableOpacity>
               ))}
            </View>
         </View >
      );
   };

   const renderCurrentQuestion = () => {
      const currentQuestion = questions[currentQuestionIndex];
      const isIndexEven = (currentQuestionIndex + 1) % 2 === 0;

      return (
         <View>
            {renderQuestion(currentQuestion, currentQuestionIndex)}
            <View style={QuestionsStyles.flexRowAlcenJusSpbtn}>
               <TouchableOpacity
                  style={QuestionsStyles.nextButton}
                  onPress={handlePreviousQuestion}
               >
                  <Text style={QuestionsStyles.nextButtonText}>{t("Previous_Label")}</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={QuestionsStyles.nextButton}
                  onPress={handleNextQuestion}
                  disabled={currentQuestion.selectedAnswer === null}
               >
                  <Text style={QuestionsStyles.nextButtonText}>{t("Next_Text")}</Text>
               </TouchableOpacity>
            </View>
         </View>
      );
   };

   const renderResult = () => {
      const percentage = calculatePercentage();
      const grade = calculateGrade(percentage);

      return (
         <QuestionResultShowFun
            grade={grade} percentage={percentage} currentQuestionIndex={currentQuestionIndex} questions={questions}
            ExamHandlePress={() => navigation.navigate(RouteName.EXAM_REVIEW)}
            PracticeMainHandlePress={() => navigation.navigate(RouteName.PRACTICE_MAIN)}
         />
      );
   };

   if (currentQuestionIndex === questions.length) {
      return renderResult();
   }

   return (
      <Container>
         <View style={[QuestionsStyles.headerTop, QuestionsStyles.padH20, QuestionsStyles.wid100]}>
            <TouchableOpacity style={QuestionsStyles.backArrow}
               onPress={() => navigation.navigate(RouteName.PRACTICE_MAIN)}
            >
               <VectorIcon icon="Fontisto" name="arrow-left-l" color={Colors.theme_background} size={SF(25)} />
            </TouchableOpacity>
            <Text style={QuestionsStyles.screenTitie}>{t("Exam_Label")}</Text>
            <Text style={QuestionsStyles.RiightTimeOut}>{formatTime(secondsRemaining)}</Text>
         </View>
         <Spacing />
         <View style={QuestionsStyles.container}>{renderCurrentQuestion()}</View>
      </Container >
   );
};

export default Questions