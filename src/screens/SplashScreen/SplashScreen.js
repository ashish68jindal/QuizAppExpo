import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";
import images from "../../index";
import { Style } from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { RouteName } from "../../routes";
import { LottieAnimation } from "../../components";
import { Colors } from "../../utils";
import { useSelector } from "react-redux";

const SplashScreen = ({ navigation }) => {
  const { colorrdata } = useSelector((state) => state.commonReducer) || {};
  const dispatch = useDispatch();

  const onCheck = async () => {
    let appIntro = await AsyncStorage.getItem("appIntro");
    let language = await AsyncStorage.getItem("language");
    let login = await AsyncStorage.getItem("login");
    if (appIntro === "1") {
      if (language === "1") {
        if (login === "1") {
          onNavigation(RouteName.SIDE_NAVIGATOR);
        } else onNavigation(RouteName.LOGIN_SCREEN);
      } else onNavigation(RouteName.SELECT_LANGUAGE);
    } else onNavigation(RouteName.SWIPER_SCREEN);
  };

  const onNavigation = (screenName) => {
    setTimeout(() => {
      // AsyncStorage.getItem("user_id").then((value) => 
        navigation.replace(screenName)
      // );
    }, 2500);
    {
      colorrdata != ""
        ? dispatch(color_picker_set_action(colorrdata))
        : dispatch(color_picker_set_action(Colors.theme_background));
    }
  };

  useEffect(() => {
    onCheck();
  }, []);
  return (
    <View style={Style.SplashMinView}>
      <StatusBar backgroundColor={Colors.theme_background} />
      <View style={Style.MinViewStyleSplash}>
        <LottieAnimation source={images.Splash_Swiper} />
      </View>
    </View>
  );
};
export default SplashScreen;
