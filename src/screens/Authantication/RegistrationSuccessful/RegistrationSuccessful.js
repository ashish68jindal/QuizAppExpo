import React, { useEffect, useRef,useMemo } from "react";
import { View, ScrollView, KeyboardAvoidingView, Animated, Easing, } from "react-native";
import { Login, Style } from '../../../styles';
import { Button, Spacing } from '../../../components';
import images from '../../../index';
import RouteName from '../../../routes/RouteName';
import LottieView from 'lottie-react-native';
import { SH } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const RegistrationSuccessful = ({ navigation }) => {
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const animationProgress = useRef(new Animated.Value(0))
  const { t } = useTranslation();
  const OnLoginsPress = () => {
    navigation.replace(RouteName.SIDE_NAVIGATOR);
  }

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])

  return (
    <View style={Login.MinViewScreenNew}>


                <LottieView
                  resizeMode="contain"
                  autoPlay={true}
                  style={{
                    width: "100%",
                    height: "90%",
                  }}
                  source={images.Account_created}
                />
                <Spacing space={SH(10)} />
                <View style={Logins.AccountButton}>
                  <Button
                    title={t("Get_Started")}
                    onPress={() => OnLoginsPress()}
                  />
                </View>


    </View>
  );
};
export default RegistrationSuccessful;
