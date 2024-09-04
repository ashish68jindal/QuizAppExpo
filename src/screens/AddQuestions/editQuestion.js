import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useMemo, useState } from "react";
import { HomeStyle, Login, PracticeMainStyle } from "../../styles";
import { Spacing, VectorIcon, DropDown, Button, Input } from "../../components";
import { useTheme } from "@react-navigation/native";
import { SF, SH, SW } from "../../utils";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  deleteField,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import { store_question_data_action } from "../../redux/action/DataAction";
import { useDispatch } from "react-redux";

const EditQuestion = (props) => {
  const { navigation, route } = props;
  const { Colors } = useTheme();
  const { t } = useTranslation();
  const selectLevel = [
    { label: "Basics", value: "1" },
    { label: "Intermediate", value: "2" },
    { label: "Advanced", value: "3" },
  ];
  const subjects = [
    { label: "React", value: "1" },
    { label: "Java", value: "2" },
    { label: "Python", value: "3" },
    { label: "C#", value: "3" },
  ];
  const [level, setLevel] = useState(
    selectLevel.find((item) => {
      return item.label === route.params.data.Levels;
    })
  );
  const [subject, setSubject] = useState(
    subjects.find((item) => {
      return item.label === route.params.data.Subjects;
    })
  );
  const [question, setQuestion] = useState(route.params.data.Question);
  const HomeStyles = useMemo(() => HomeStyle(Colors), [Colors]);
  const PracticeMainStyles = useMemo(() => PracticeMainStyle(Colors), [Colors]);
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const dispatch = useDispatch();

  const [options, setOptions] = useState([
    {
      label: route.params.data.OptionA,
      value: "1",
    },
    {
      label: route.params.data.OptionB,
      value: "2",
    },
    {
      label: route.params.data.OptionC,
      value: "3",
    },
    {
      label:route.params.data.OptionD,
      value: "4",
    },
  ]);

  const [correctAnswer, setCorrectAnswer] = useState(
    options.find((item) => {
      return item.label === route.params.data.Answer;
    })
  );

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].label = value;
    setOptions(newOptions);
  };

  const getQuestions = async () => {
    const docRef = doc(db, "quiz", "questions");

    onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const assignmentData = docSnapshot.data();
        let res = [];
        res = Object.values(assignmentData);
        dispatch(store_question_data_action(res));
      }
    });
  };

  const handleSubmit = async () => {
    if (
      question &&
      correctAnswer?.label &&
      level?.label &&
      subject?.label &&
      options[0] &&
      options[1] &&
      options[2] &&
      options[3]
    ) {
      try {
        const name = question + subject.label + level.label;
        const docRef = doc(db, "quiz", "questions");

        await updateDoc(docRef, {
          [route.params.data.Name]: deleteField(),
        });

        const data = {
          [name]: {
            Name: name,
            Question: question,
            OptionA: options[0]?.label,
            OptionB: options[1]?.label,
            OptionC: options[2]?.label,
            OptionD: options[3]?.label,
            Answer: correctAnswer?.label,
            Subjects: subject?.label,
            Levels: level?.label,
          },
        };

        await setDoc(docRef, data, { merge: true });
        setCorrectAnswer("");
        setLevel("");
        setSubject("");
        setQuestion("");

        setOptions([
          { label: "", value: "1" },
          { label: "", value: "2" },
          { label: "", value: "3" },
          { label: "", value: "4" },
        ]);
        await getQuestions();
        navigation.goBack();

        // Clear input fields after adding exam
      } catch (error) {
        console.log("ERROR:", error);
      }
    }
    // Handle form submission
    console.log({ question, correctAnswer, options, level, subject });
  };

  return (
    <View style={{ width: "100%" }}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={PracticeMainStyles.wrapBoxTop}>
          <Spacing space={SH(10)} />
          <View style={PracticeMainStyles.flexRowAlcnJusSbtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <VectorIcon
                icon="Fontisto"
                name="arrow-left-l"
                color={Colors.white_text_color}
                size={SF(27)}
              />
            </TouchableOpacity>
          </View>
          <Spacing space={SH(20)} />
        </View>
        <Spacing space={SH(20)} />
        <Text style={Logins.LoginText}>{"Edit Question Form"}</Text>
        <Spacing space={SH(20)} />
        <View style={Logins.InputSpaceView}>
          <Input
            title={"Question"}
            placeholder={"Enter Question"}
            onChangeText={(text) => setQuestion(text)}
            value={question}
            placeholderTextColor={Colors.gray_text_color}
          />
        </View>

        {options.map((option, index) => (
          <View style={Logins.InputSpaceView}>
            <Input
              title={`Option ${index + 1}`}
              placeholder={`Enter Option ${index + 1}`}
              onChangeText={(text) => handleOptionChange(index, text)}
              value={option.label}
              placeholderTextColor={Colors.gray_text_color}
            />
          </View>
        ))}

        <DropDown
          data={selectLevel}
          dropdownStyle={HomeStyles.QuestionDropdown}
          onChange={(item) => {
            setLevel(item);
          }}
          placeholder={"Select Level"}
          value={level}
          labelField="label"
          valueField="value"
        />
        <DropDown
          data={subjects}
          dropdownStyle={HomeStyles.QuestionDropdown}
          onChange={(item) => {
            setSubject(item);
          }}
          placeholder={"Select Subject"}
          value={subject}
          labelField="label"
          valueField="value"
        />
        <DropDown
          data={options}
          dropdownStyle={HomeStyles.QuestionDropdown}
          onChange={(item) => {
            setCorrectAnswer(item);
          }}
          placeholder={"Select Correct Answer"}
          value={correctAnswer}
          labelField="label"
          valueField="value"
        />
        <Spacing space={SH(20)} />
        <Button
          buttonStyle={{ height: SH(50), width: SW(300), alignSelf: "center" }}
          onPress={() => {
            handleSubmit();
          }}
          title={"Submit"}
        />
        <Spacing space={SH(100)} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EditQuestion;

const styles = StyleSheet.create({});
