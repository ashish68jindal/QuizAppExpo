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
import images from "../../../index";

const Leaderboard = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const LeaderboardStyles = useMemo(() => LeaderboardStyle(Colors), [Colors]);
  const [leaderData,setLeaderData]=useState([])

  useEffect(() => {
    fetch(`${baseUrl()}getResult`)
      .then((resp) => resp.json())
      .then((json) => {
        setLeaderData(json.data)
      })
      .catch((error) => console.error(error));
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
       {leaderData?<SwipeListViewFun
          data={leaderData}
          renderItem={({ item, index }) => <LeaderBordFlatList item={item} />}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={0}
          disableLeftSwipe={false}
          rightOpenValue={SW(-120)}
          previewOpenDelay={3000}
          disableRightSwipe={false}
        />:null}
      </View>
    </Container>
  );
};
export default Leaderboard;
