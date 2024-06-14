import React, { useMemo, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { PracticeMainStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { SF, SH } from "../../utils";
import { RouteName } from "../../routes";
import { Container, Spacing, VectorIcon, PracticeExamFlatList, Modal, Button } from '../../components';
import images from "../../index";

const PracticeMain = (props) => {
   const { navigation } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const PracticeMainStyles = useMemo(() => PracticeMainStyle(Colors), [Colors]);
   const [modalVisible, setModalVisible] = useState(false);

   useEffect(() => {
      setModalVisible(true)
   }, []);

   const practiceExamListData = [
      {
        id: 1,
        img: images.practiceImg1,
        examTitle: "Exam_Number_Title_Label_1",
        numOfnum: "20/20",
        statusIcon: images.right,
        progressValue: 20000,
        percentage: "100%",
        percentColor: Colors.green_color,
        lockExam: false
      },
      {
        id: 2,
        img: images.practiceImg1,
        examTitle: "Exam_Number_Title_Label_2",
        numOfnum: "20/20",
        statusIcon: images.explation,
        progressValue: 13500,
        percentage: "75%",
        percentColor: Colors.minion_yellow_color,
        lockExam: false
      },
      {
        id: 3,
        img: images.practiceImg1,
        examTitle: "Exam_Number_Title_Label_3",
        numOfnum: "20/20",
        statusIcon: images.wrong,
        progressValue: 20000,
        percentage: "100%",
        percentColor: Colors.red,
        lockExam: false
      },
      {
        id: 4,
        img: images.practiceImg1,
        examTitle: "Exam_Number_Title_Label_4",
        numOfnum: "20/20",
        statusIcon: images.lock,
        progressValue: 20000,
        percentage: "100%",
        percentColor: Colors.green_color,
        lockExam: true
      },
    
    ]

   return (
      <Container>
         <View style={PracticeMainStyles.wrapBoxTop}>
            <Spacing space={SH(10)} />
            <View style={PracticeMainStyles.flexRowAlcnJusSbtn}>
               <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                  <VectorIcon icon="Fontisto" name="arrow-left-l" color={Colors.white_text_color} size={SF(27)} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                  <VectorIcon icon="Ionicons" name="notifications-outline" color={Colors.white_text_color} size={SF(27)} />
               </TouchableOpacity>
            </View>
            <Spacing space={SH(20)} />
            <View style={PracticeMainStyles.flexRowAlcn}>
               <View style={PracticeMainStyles.width50}>
                  <Text style={PracticeMainStyles.headingText}>{t("Exam_Title_Label_1")}</Text>
                  <Text style={PracticeMainStyles.subHeadingText}>{t("Practice_Screen_Sub_Title_1")}</Text>
               </View>
               <View style={PracticeMainStyles.width50}>
                  <Image source={images.practicebgImg} style={PracticeMainStyles.bgimage} />
               </View>
            </View>
            <Spacing space={SH(10)} />
         </View>
         <Spacing space={SH(30)} />
         <FlatList
            data={practiceExamListData}
            renderItem={({ item, index }) => (<PracticeExamFlatList item={item} index={index}
               onPress={() => navigation.navigate(RouteName.QUESTIONS)}
            />)}
         />

         <Modal
            modalVisible={modalVisible}           
         >
            <View style={PracticeMainStyles.ModalInContainer}>
               <View>
                  <View style={PracticeMainStyles.centerModeClass}>
                     <Image source={images.practiceModal} style={PracticeMainStyles.modalImg} />
                     <Spacing />
                     <Text style={PracticeMainStyles.myExamStyle}>{t("Reply_Exam_Label")}</Text>
                     <Spacing />
                     <Text style={PracticeMainStyles.updateText}>{t("Update_Level_Label")}</Text>
                  </View>
                  <Spacing space={SH(30)} />
                  <Button title={t("Reply_Exam_Label")} onPress={()=> setModalVisible(false)} />
               </View>
            </View>
         </Modal>
      </Container>
   )
}

export default PracticeMain