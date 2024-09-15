import React, { useState, useMemo, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { HomeStyle } from "../../../styles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { SH } from "../../../utils";
import {
  Container,
  Spacing,
  Search,
  HomeExamCardFlatList,
  Modal,
  DropDown,
  Button,
} from "../../../components";
import images from "../../../index";
import { RouteName } from "../../../routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeTab = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const { navigation } = props;
  const HomeStyles = useMemo(() => HomeStyle(Colors), [Colors]);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Alex");
  const [email, setEmail] = useState("");

  const selectLevel = [
    { label: "Basics", value: "1" },
    { label: "Intermediate", value: "2" },
    { label: "Advanced", value: "3" },
  ];

  const getData = async () => {
    const userName = await AsyncStorage.getItem("name");
    const userEmail = await AsyncStorage.getItem("email");
    setName(userName);
    setEmail(userEmail);
  };

  useEffect(() => {
    getData();
  }, []);

  const ArrayList = {
    clientDrop: "",
  };
  const FocusState = {
    clientDrop: false,
  };
  const [textInput, setTextInput] = useState(ArrayList);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleButtonPress = () => {
    if (textInput !== "") {
      setIsButtonDisabled(false);
      setModalVisible(!modalVisible);
    }
  };

  const homeCardData = [
    {
      id: 1,
      examTitle: "Exam_Title_Label_1",
      bgimage: images.react,
      subject: "React",
      backgroundColor: Colors.cardbgColor1,
    },
    {
      id: 2,
      examTitle: "Exam_Title_Label_2",
      subject: "Java",
      bgimage: images.java,
      backgroundColor: Colors.cardbgColor2,
    },
    {
      id: 3,
      examTitle: "Exam_Title_Label_3",
      bgimage: images.python,
      subject: "Python",
      backgroundColor: Colors.cardbgColor3,
    },
    {
      id: 4,
      examTitle: "Exam_Title_Label_4",
      bgimage: images.c,
      subject: "C#",
      backgroundColor: Colors.cardbgColor4,
    },
  ];

  return (
    <Container>
      <View style={HomeStyles.homeProfileWrap}>
        <View style={HomeStyles.flexRowAlcn}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.PROFILE_TAB)}
          >
            <Image
              source={images.homeProfile}
              style={HomeStyles.homeProfileImg}
            />
          </TouchableOpacity>
          <View style={HomeStyles.textBox}>
            <Text style={HomeStyles.nameText}>{t("Hello_Label")},</Text>
            <Text style={HomeStyles.nameText}>{name}</Text>
            <Text style={HomeStyles.smallText}>
              {t("Lets_Workout_Get_Some_Gains_Label")}
            </Text>
          </View>
        </View>
        <Spacing space={SH(20)} />

        <Spacing space={SH(20)} />
      </View>
      {email === "admin@yopmail.com" ? (
        <>
          <Spacing space={SH(30)} />

          <Button
            buttonStyle={[HomeStyles.button]}
            onPress={() => {
              navigation.navigate(RouteName.QUESTION_LIST);
            }}
            title={t("Handle_Question")}
          />
        </>
      ) : null}
      <Spacing space={SH(30)} />

      <FlatList
        data={homeCardData}
        renderItem={({ item, index }) => (
          <HomeExamCardFlatList
            item={item}
            index={index}
            onPress={() => navigation.navigate(RouteName.PRACTICE_MAIN, item)}
          />
        )}
        numColumns={2}
      />
      <Spacing space={SH(30)} />

      <Modal modalVisible={modalVisible}>
        <View style={HomeStyles.ModalInContainer}>
          <View>
            <View style={HomeStyles.centerModeClass}>
              <Image source={images.exam} style={HomeStyles.modalImg} />
              <Spacing />
              <Text style={HomeStyles.myExamStyle}>
                {t("Welcome_My_Exam_Label")}
              </Text>
              <Spacing />
              <Text style={HomeStyles.updateText}>
                {t("Update_Level_Label")}
              </Text>
            </View>
            <Spacing space={SH(30)} />
            <DropDown
              data={selectLevel}
              dropdownStyle={HomeStyles.LeadDropdown}
              onChange={(item) => {
                setTextInput({ ...textInput, clientDrop: item.value });
                setIsButtonDisabled();
              }}
              placeholder={t("Exam_Prepration_Label")}
              value={textInput.clientDrop}
              labelField="label"
              valueField="value"
            />
            <Spacing space={SH(30)} />
            <Button
              buttonStyle={[
                HomeStyles.button,
                isButtonDisabled && HomeStyles.disabledButton,
              ]}
              onPress={handleButtonPress}
              disable={isButtonDisabled}
              title={t("Continue_Label")}
            />
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default HomeTab;
