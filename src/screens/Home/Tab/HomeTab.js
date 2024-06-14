import React, { useState, useMemo, } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { HomeStyle } from '../../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { SH } from "../../../utils";
import { Container, Spacing, Search, HomeExamCardFlatList, Modal, DropDown, Button } from "../../../components";
import images from "../../../index";
import { RouteName } from "../../../routes";

const HomeTab = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const { navigation } = props;
  const HomeStyles = useMemo(() => HomeStyle(Colors), [Colors]);
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const selectLevel = [
    { label: t("Exam_Level_Label_1"), value: '1' },
    { label: t("Exam_Level_Label_2"), value: '2' },
    { label: t("Exam_Level_Label_3"), value: '3' },
  ]

  const ArrayList = {
    clientDrop: '',
  }
  const FocusState = {
    clientDrop: false,
  }
  const [textInput, setTextInput] = useState(ArrayList);
  const [isFocus, setIsFocus] = useState(FocusState);

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
      bgimage: images.homebgimg1,
      backgroundColor: Colors.cardbgColor1,
    },
    {
      id: 2,
      examTitle: "Exam_Title_Label_2",
      bgimage: images.homebgimg2,
      backgroundColor: Colors.cardbgColor2
    },
    {
      id: 3,
      examTitle: "Exam_Title_Label_3",
      bgimage: images.homebgimg3,
      backgroundColor: Colors.cardbgColor3
    },
    {
      id: 4,
      examTitle: "Exam_Title_Label_4",
      bgimage: images.homebgimg4,
      backgroundColor: Colors.cardbgColor4
    },
  ]
  

  return (
    <Container>
      <View style={HomeStyles.homeProfileWrap}>
        <View style={HomeStyles.flexRowAlcn}>
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.PROFILE_TAB)}>
            <Image source={images.homeProfile} style={HomeStyles.homeProfileImg} />
          </TouchableOpacity>
          <View style={HomeStyles.textBox}>
            <Text style={HomeStyles.nameText}>{t("Hello_Label")},</Text>
            <Text style={HomeStyles.nameText}>{t("Alex_Label")}</Text>
            <Text style={HomeStyles.smallText}>{t("Lets_Workout_Get_Some_Gains_Label")}</Text>
          </View>
        </View>
        <Spacing space={SH(20)} />
        <Search placeholder={t("Search_Text")}
          onChangeText={(value) => setSearch(value)}
          value={search} />
        <Spacing space={SH(20)} />
      </View>
      <Spacing space={SH(30)} />

      <FlatList
        data={homeCardData}
        renderItem={({ item, index }) => (<HomeExamCardFlatList item={item} index={index}
          onPress={() => navigation.navigate(RouteName.PRACTICE_MAIN)}
        />)}
        numColumns={2}
      />
      <Spacing space={SH(30)} />

      <Modal
        modalVisible={modalVisible}
      >
        <View style={HomeStyles.ModalInContainer}>
          <View>
            <View style={HomeStyles.centerModeClass}>
              <Image source={images.homeModalImg} style={HomeStyles.modalImg} />
              <Spacing />
              <Text style={HomeStyles.myExamStyle}>{t("Welcome_My_Exam_Label")}</Text>
              <Spacing />
              <Text style={HomeStyles.updateText}>{t("Update_Level_Label")}</Text>
            </View>
            <Spacing space={SH(30)} />
            <DropDown
              data={selectLevel}
              dropdownStyle={HomeStyles.LeadDropdown}
              onChange={item => {
                setTextInput({ ...textInput, clientDrop: item.value });
                setIsFocus(FocusState.clientDrop);
                setIsButtonDisabled();
              }}

              placeholder={t("Exam_Prepration_Label")}
              value={textInput.clientDrop}
              labelField="label"
              valueField="value"
            />
            <Spacing space={SH(30)} />
            <Button buttonStyle={[HomeStyles.button, isButtonDisabled && HomeStyles.disabledButton]}
              onPress={handleButtonPress}
              disable={isButtonDisabled} title={t("Continue_Label")} />
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default HomeTab;