import React, {useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {Colors} from '../utils';

const Stack = createNativeStackNavigator();

import {RouteName, SideNavigator} from '../routes';

import {
  LoginScreen,
  RegisterScreen,
  OtpVeryfiveScreen,
  SplashScreen,
  RegistrationSuccessful,
  Swiperscreen,
  TranslationScreen,
  ForgotPassword,
  Questions,
  PracticeMain,
  ExamReview,
  Answer,
} from '../screens';

const RootNavigator = props => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors,
  };
  const [colorValue, setColorValue] = useState(MyTheme);
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != '') {
      Colors.theme_background = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors,
      };
      setColorValue(MyThemeNew);
    }
  }, [colorrdata, Colors]);
  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={RouteName.SPLSH} component={SplashScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={RouteName.REGISTER_SCREEN}
          component={RegisterScreen}
        />
        <Stack.Screen
          name={RouteName.SIDE_NAVIGATOR}
          component={SideNavigator}
        />
        <Stack.Screen
          name={RouteName.REGIATRAION_SUCCESSFULL}
          component={RegistrationSuccessful}
        />
        <Stack.Screen
          name={RouteName.OTP_VERYFY_SCREEN}
          component={OtpVeryfiveScreen}
        />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen
          name={RouteName.SELECT_LANGUAGE}
          component={TranslationScreen}
        />
        <Stack.Screen
          name={RouteName.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <Stack.Screen name={RouteName.PRACTICE_MAIN} component={PracticeMain} />
        <Stack.Screen name={RouteName.QUESTIONS} component={Questions} />
        <Stack.Screen name={RouteName.EXAM_REVIEW} component={ExamReview} />
        <Stack.Screen name={RouteName.ANSWER} component={Answer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
