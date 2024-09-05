import React, { useMemo } from "react";
import { View, Text, Image } from "react-native";
import { Spacing, VectorIcon } from "../../components";
import { LeaderboardStyle } from "../../styles";
import { SF, SH, Colors } from "../../utils";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import images from "../../index";

import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const LeaderBordFlatList = (props) => {
  const { item } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const LeaderboardStyles = useMemo(() => LeaderboardStyle(Colors), [Colors]);
  const {
    Complete,
    email,
    Name,
    Score,
    UnAnswered,
    WrongAnswer,
    id,
    levels,
    subjects,
  } = item;

  const calculateGrade = () => {
   if (Score >= 90) {
     return t("XPLabel_1");
   } else if (Score >= 80) {
     return t("XPLabel_2");
   } else if (Score >= 70) {
     return t("XPLabel_3");
   } else if (Score >= 60) {
     return t("XPLabel_4");
   } else {
     return t("XPLabel_5");
   }
 };

  return (
    <View style={LeaderboardStyles.LeaderboardBoxStyle}>
      <View style={LeaderboardStyles.flexRowAlcen}>
        <Image source={images.homeProfile} style={LeaderboardStyles.homeProfileImg} />
        <View>
          <Text style={LeaderboardStyles.nameTetx}>{Name}</Text>
          <Spacing space={SH(6)} />
          <Text style={LeaderboardStyles.xpGainText}>{calculateGrade()}</Text>
        </View>
      </View>
      <View style={LeaderboardStyles.flexRowAlcen}>
        <View>
          <View style={LeaderboardStyles.srnumStyle}>
            <Text style={LeaderboardStyles.srNumText}>{id}</Text>
          </View>
          <Image
            source={images.rankIcon}
            resizeMode="contain"
            style={LeaderboardStyles.rankIocn}
          />
        </View>
        <VectorIcon
          icon="MaterialCommunityIcons"
          name="dots-vertical"
          color={Colors.theme_background}
          size={SF(25)}
        />
      </View>
    </View>
  );
};

export default LeaderBordFlatList;
