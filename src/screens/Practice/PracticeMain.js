import React, { useMemo, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { PracticeMainStyle } from "../../styles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { SF, SH } from "../../utils";
import { RouteName } from "../../routes";
import {
  Container,
  Spacing,
  VectorIcon,
  PracticeExamFlatList,
  Modal,
  Button,
  LottieAnimation,
} from "../../components";
import images from "../../index";

const PracticeMain = (props) => {
  const { navigation, route } = props;
  const { examTitle, bgimage, subject, backgroundColor } = route.params;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const PracticeMainStyles = useMemo(() => PracticeMainStyle(Colors), [Colors]);
  const [modalVisible, setModalVisible] = useState(false);

  const practiceExamListData = [
    {
      id: 1,
      img: images.easy,
      examTitle: "Basics",
      level: "Basics",
    },
    {
      id: 2,
      img: images.intermediate,
      examTitle: "Intermediate",
      level: "Intermediate",
    },
    {
      id: 3,
      img: images.advance,
      examTitle: "Advance",
      level: "Advanced",
    },
  ];

  return (
    <Container>
      <View style={PracticeMainStyles.wrapBoxTop}>
        <Spacing space={SH(10)} />
        <View style={PracticeMainStyles.flexRowAlcnJusSbtn}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}
          >
            <VectorIcon
              icon="Fontisto"
              name="arrow-left-l"
              color={Colors.white_text_color}
              size={SF(27)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}
          >
            <VectorIcon
              icon="Ionicons"
              name="notifications-outline"
              color={Colors.white_text_color}
              size={SF(27)}
            />
          </TouchableOpacity>
        </View>
        <Spacing space={SH(20)} />
        <View style={PracticeMainStyles.flexRowAlcn}>
          <View style={PracticeMainStyles.width50}>
            <Text style={PracticeMainStyles.headingText}>{t(examTitle)}</Text>
            <Text style={PracticeMainStyles.subHeadingText}>
              {t("Practice_Screen_Sub_Title_1")}
            </Text>
          </View>
          <View
            style={[
              PracticeMainStyles.width50,
              {
                backgroundColor: backgroundColor,
                height: SH(180),
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <LottieAnimation
              source={bgimage}
              Lottiewidthstyle={PracticeMainStyles.Lottiewidthstyle}
            />
          </View>
        </View>
        <Spacing space={SH(10)} />
      </View>
      <Spacing space={SH(30)} />
      <FlatList
        data={practiceExamListData}
        renderItem={({ item, index }) => (
          <PracticeExamFlatList
            item={item}
            index={index}
            onPress={() =>
              navigation.navigate(RouteName.QUESTIONS, {
                subject: subject,
                level: item.level,
              })
            }
          />
        )}
      />

      <Modal modalVisible={modalVisible}>
        <View style={PracticeMainStyles.ModalInContainer}>
          <View>
            <View style={PracticeMainStyles.centerModeClass}>
              <Image
                source={images.practiceModal}
                style={PracticeMainStyles.modalImg}
              />
              <Spacing />
              <Text style={PracticeMainStyles.myExamStyle}>
                {t("Reply_Exam_Label")}
              </Text>
              <Spacing />
              <Text style={PracticeMainStyles.updateText}>
                {t("Update_Level_Label")}
              </Text>
            </View>
            <Spacing space={SH(30)} />
            <Button
              title={t("Reply_Exam_Label")}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default PracticeMain;
