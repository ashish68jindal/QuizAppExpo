import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { LeaderboardStyle } from "../../../styles";
import { SF, SW, baseUrl } from "../../../utils";
import {
  Container,
  VectorIcon,
  SwipeListViewFun,
  LeaderBordFlatList,
  Spacing,
} from "../../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase";

const Leaderboard = (props) => {
  const { Colors } = useTheme();
  const LeaderboardStyles = useMemo(() => LeaderboardStyle(Colors), [Colors]);
  const [leaderData, setLeaderData] = useState([]);

  const APICall = async () => {
    const docRef = doc(db, "quiz", "questions");
    onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const assignmentData = docSnapshot.data();
        let res = [];
        res = Object.values(assignmentData);
        setLeaderData(res);
      }
    });
  };

  useEffect(() => {
    APICall();
  }, []);

  const renderHiddenItem = ({ item }) => (
    <View style={LeaderboardStyles.sideBtnBox}>
      <View style={LeaderboardStyles.sideSUbBtn}>
        <VectorIcon
          icon="Feather"
          name="users"
          size={SF(25)}
          color={Colors.white_text_color}
        />
      </View>
      <View style={[LeaderboardStyles.sideSUbBtn, LeaderboardStyles.colorRed]}>
        <VectorIcon
          icon="AntDesign"
          name="hearto"
          size={SF(25)}
          color={Colors.white_text_color}
        />
      </View>
    </View>
  );

  return (
    <Container>
      <Spacing />
      <View style={LeaderboardStyles.wraper}>
        {leaderData ? (
          <SwipeListViewFun
            data={leaderData}
            renderItem={({ item, index }) => <LeaderBordFlatList item={item} />}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={0}
            disableLeftSwipe={false}
            rightOpenValue={SW(-120)}
            previewOpenDelay={3000}
            disableRightSwipe={false}
          />
        ) : null}
      </View>
    </Container>
  );
};
export default Leaderboard;
