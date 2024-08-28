import React, { useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { HistoryTabStyle } from "../../../styles";
import {
  Spacing,
  PieChartComponent,
  ProgressBar,
  LineChartComponet,
  VectorIcon,
} from "../../../components";
import { SH, SF, Colors, SW, baseUrl } from "../../../utils";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HistoryTab = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const HistoryTabStyles = useMemo(() => HistoryTabStyle(Colors), [Colors]);
  const { t } = useTranslation();
  const [userData, setUserData] = useState({});

  const APICall = async () => {
    const emailId = await AsyncStorage.getItem("email");
    await fetch(`${baseUrl()}getResult`)
      .then((resp) => resp.json())
      .then((json) => {
        const newData = json?.data?.find((item) => item.Email === emailId);
        setUserData(newData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    APICall();
  }, []);
  // {"Complete": "2", 
  //   "Email": "ashish6@yopmail.com", 
  //   "Name": "dsfdsf",
  //    "Score": "20",
  //     "UnAnswered": "0",
  //      "WrongAnswer": "8",
  //        "id": 6,
  //         "levels": "Intermediate",
  //          "subjects": "React", 
  //         }

  const customLabel = (val) => {
    return (
      <View style={HistoryTabStyles.xAxisLabelBoxStyle}>
        <Text style={HistoryTabStyles.yAxisTextStyle}>{val}</Text>
      </View>
    );
  };

  const xpGain = "Gain_XP_Label_4";
  const chartData = [
    { value: 15, labelComponent: () => customLabel(t("Week_Label_1")) },
    { value: 30, labelComponent: () => customLabel(t("Week_Label_2")) },
    { value: 26, labelComponent: () => customLabel(t("Week_Label_3")) },
    { value: 40, labelComponent: () => customLabel(t("Week_Label_4")) },
    { value: 30, labelComponent: () => customLabel(t("Week_Label_5")) },
    { value: 40, labelComponent: () => customLabel(t("Week_Label_6")) },
    { value: 20, labelComponent: () => customLabel(t("Week_Label_7")) },
  ];
  const data = [
    { value: parseInt(userData?.Score), color: Colors.minion_yellow_color },
    { value: 100-parseInt(userData?.Score), color: Colors.red },
    { value: 0, color: Colors.theme_background },
  ];

  const PieRigthFun = ({ color, textPercentage, textForReportTitle }) => {
    return (
      <View style={HistoryTabStyles.Flexrowtherty}>
        <View>
          <VectorIcon
            icon="Octicons"
            name="dot-fill"
            color={color}
            size={SF(30)}
          />
        </View>
        <View>
          <Text style={HistoryTabStyles.FlexrowthertyText}>
            {textPercentage}
          </Text>
          <Text style={HistoryTabStyles.TotalTextStyle}>
            {textForReportTitle}
          </Text>
        </View>
      </View>
    );
  };
  const calculateGrade = (Score) => {
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

  const centerLabelComponent = () => {

    return (
      <View style={HistoryTabStyles.cneterClass}>
        <Text style={HistoryTabStyles.UserName}>60%</Text>
        <Text style={HistoryTabStyles.smallText}>{t("Avrage_Label")}</Text>
      </View>
    );
  };
  return (
    <View style={HistoryTabStyles.BackgroundWhite}>
      <View style={HistoryTabStyles.whilistminbody}>
        <View style={HistoryTabStyles.profileBox}>
          <View style={HistoryTabStyles.flecRowOnly}>
            <View style={HistoryTabStyles.rightBoxOfProfile}>
              <View style={HistoryTabStyles.flexRowAlcen}>
                <ProgressBar
                  value={13500}
                  variant="determinate"
                  color={Colors.gray_text_color}
                  style={HistoryTabStyles.width100}
                  trackColor={Colors.minion_yellow_color}
                  secondary={Colors.minion_yellow_color}
                />
                <Text style={HistoryTabStyles.gainXpStyle}>{t(xpGain)}</Text>
              </View>
              <Spacing space={SH(20)} />
              <View style={HistoryTabStyles.flexRowAlcen}>
                <View>
                  <Text style={HistoryTabStyles.UserName}>15</Text>
                  <Text style={HistoryTabStyles.smallText}>
                    {t("Completed_The_Exam_Label")}
                  </Text>
                </View>
                <View style={HistoryTabStyles.leftSpce}>
                  <Text style={HistoryTabStyles.UserName}>60%</Text>
                  <Text style={HistoryTabStyles.smallText}>
                    {t("Ratio_Label")}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Spacing />
        </View>
        {/* Chart Executed  */}
        <Spacing space={SH(20)} />
        <ScrollView>
          <Text style={[HistoryTabStyles.headerText, HistoryTabStyles.padH20]}>
            {t("Weekly_Label")}
          </Text>
          <Spacing space={SH(20)} />
          <LineChartComponet
            data={chartData}
            startFillColor={Colors.theme_rgb_color}
            startOpacity={0.8}
            endOpacity={0.3}
            yAxisColor={Colors.theme_background}
            xAxisColor={Colors.theme_background}
            width={SW(300)}
          />
          <Spacing space={SH(20)} />
          <Text style={[HistoryTabStyles.headerText, HistoryTabStyles.padH20]}>
            {t("Monthly_Label")}
          </Text>
          <Spacing space={SH(20)} />
          <View
            style={[
              HistoryTabStyles.flexRowAlcen,
              HistoryTabStyles.cneterClass,
            ]}
          >
            <View
              style={[HistoryTabStyles.cneterClass, HistoryTabStyles.pieWidth]}
            >
              <PieChartComponent
                donut
                innerCircleB
                radius={80}
                innerRadius={55}
                textSize={18}
                textBackgroundRadius={0}
                data={data}
                innerCircleColor={Colors.blue_color}
                centerLabelComponent={centerLabelComponent}
              />
            </View>

            <View style={HistoryTabStyles.Forthinwidth}>
              <PieRigthFun
                color={Colors.minion_yellow_color}
                textPercentage={`${userData.Score} %`}
                textForReportTitle={t("Completed_Label")}
              />
              <PieRigthFun
                color={Colors.red}
                textPercentage={`${100-parseInt(userData.Score)} %`}
                textForReportTitle={t("Wrong_Answered_Label")}
              />
              <PieRigthFun
                color={Colors.theme_background}
                textPercentage={"0 %"}
                textForReportTitle={t("UnAnswered_Label")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default HistoryTab;
