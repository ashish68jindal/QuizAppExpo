import React, { useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { SwiperStyle } from "../../styles";
import { Button, Spacing, LottieAnimation } from "../../components";
import { RouteName } from "../../routes";
import { SH } from "../../utils";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import images from "../../index";
import { color } from "@rneui/base";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = ({ navigation }) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SwiperStyles = useMemo(() => SwiperStyle(Colors), [Colors]);

  const Swiperdata = [
    {
      key: "s1",
      text: "Swiperfirst",
      title: "Swipertitle",
      animation: images.First_Swiper,
      colorFilters: [
        {
          keypath: "Comp 11",
          color: "blue",
        },
        {
          keypath: "brain",
          color: "blue",
        },
        {
          keypath: "quiz text",
          color: "blue",
        },
      ],
    },
    {
      key: "s2",
      text: "SwiperFirstTwo",
      title: "SwiperTitleTwo",
      animation: images.Two_Swiper,
      colorFilters: [],
    },
    {
      key: "s3",
      text: "SwiperFirstThree",
      title: "Swipertitlethree",
      animation: images.Three_Swiper,
      backgroundColor: "transparent",
      colorFilters: [
        {
          keypath: "Pen",
          color: "blue",
        },
      ],
    },
  ];

  const RenderItem = ({ item }) => {
    return (
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={SwiperStyles.ScrollViewStyle}
        >
          <View style={SwiperStyles.AnimationViewStyle}>
            <LottieAnimation
              source={item.animation}
              colorFilters={item.colorFilters}
            />
          </View>
        </ScrollView>
        <Text style={SwiperStyles.TitleStyles}>{t(item.title)}</Text>
        <Text style={SwiperStyles.Textstyle}>{t(item.text)}</Text>
      </View>
    );
  };

  const onNavigation = async () => {
    await AsyncStorage.setItem("appIntro", "1");
    navigation.replace(RouteName.SELECT_LANGUAGE);
  };

  const _renderDoneButton = () => {
    return (
      <View style={SwiperStyles.ButtonCircle}>
        <Button
          title={t("Get_Started")}
          buttonStyle={SwiperStyles.buttonStyle}
          onPress={() => onNavigation()}
        />
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <Spacing space={SH(12)} />
        <Text style={SwiperStyles.NextTextStyle}>{t("Next_Text")}</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <TouchableOpacity
          onPress={() => onNavigation()}
        >
          <Spacing space={SH(12)} />
          <Text style={SwiperStyles.NextTextStyle}>{t("Skip_Text")}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={Swiperdata}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={SwiperStyles.ActiveDotStyles}
        dotStyle={SwiperStyles.DotSwiperStyle}
      />
    </>
  );
};
export default App;
