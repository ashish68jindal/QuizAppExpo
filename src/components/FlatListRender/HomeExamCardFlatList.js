import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HomeStyle } from "../../styles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { LottieAnimation } from "../../components";

const HomeExamCardFlatList = (props) => {
  const { item, index, onPress } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeStyles = useMemo(() => HomeStyle(Colors), [Colors]);

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        HomeStyles.cardBodyBox,
        index % 2 !== 0 && HomeStyles.mrtTop,
        { backgroundColor: item.backgroundColor },
      ]}
    >
      <LottieAnimation
        source={item.bgimage}
        Lottiewidthstyle={HomeStyles.Lottiewidthstyle}
      />

      <View style={HomeStyles.TitleBox}>
        <Text style={HomeStyles.examTitle}>{t(item.examTitle)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeExamCardFlatList;
