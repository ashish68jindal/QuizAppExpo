import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { HomeStyle, PracticeMainStyle } from "../../styles";
import { Container, Spacing, VectorIcon, Button } from "../../components";
import { useTheme } from "@react-navigation/native";
import { SF, SH } from "../../utils";
import { RouteName } from "../../routes";

import {
  doc,
  onSnapshot,
  deleteField,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import { store_question_data_action } from "../../redux/action/DataAction";
import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "./questionCard";

const QuestionList = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const dispatch = useDispatch();
  const HomeStyles = useMemo(() => HomeStyle(Colors), [Colors]);
  const PracticeMainStyles = useMemo(() => PracticeMainStyle(Colors), [Colors]);
  const { questionList } = useSelector((state) => state.DataReducer) || {
    questionList,
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

  useEffect(() => {
    getQuestions();
  }, []);

  const [refresh, setRefresh] = useState(false);

  const onRefresh = async () => {
    await setRefresh(true);
    await getQuestions();
    await setRefresh(false);
  };

  const handleEdit = async (data) => {
    navigation.navigate(RouteName.EDIT_QUESTION, { data });
  };

  const handleDelete = async (data) => {
    try {
      const docRef = doc(db, "quiz", "questions");
      await updateDoc(docRef, {
        [data.Name]: deleteField(),
      });
      await getQuestions();
    } catch (error) {
      console.error("Error deleting Question:", error.message);
    }
  };

  return (
    <Container>
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
      <Spacing space={SH(30)} />
      <Button
        buttonStyle={[HomeStyles.button]}
        onPress={() => {
          navigation.navigate(RouteName.ADD_QUESTION);
        }}
        title={"Add Questions"}
      />
      <Spacing space={SH(30)} />
      <FlatList
        data={questionList}
        onRefresh={() => onRefresh()}
        refreshing={refresh}
        keyExtractor={(item) => item.Question.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <QuestionCard
            item={item}
            index={index}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      />
    </Container>
  );
};

export default QuestionList;

const styles = StyleSheet.create({});
