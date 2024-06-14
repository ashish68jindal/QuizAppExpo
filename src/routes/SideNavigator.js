import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import RouteName from './RouteName';
import {
  CustomSidebarMenu,
  AppHeader,
  VectorIcon,
  ColorPicker,
} from '../components';
import {Colors, SF} from '../utils';
import {Style} from '../styles';
import {DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {TabNavigator} from '../routes';
import {
  SettingsScreen,
  HelpScreen,
  FAQScreen,
  ReviewsScreen,
  NotificationScreen,
  YourFriend,
  Chatscreen,
} from '../screens';

const SideNavigator = props => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const {navigation} = props;
  const {detailsStore} = useSelector(state => state.DataReducer) || {
    detailsStore,
  };
  const {t} = useTranslation();
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors,
  };
  const HeaderArray = {
    headerShown: true,
    headerTintColor: Colors.white_text_color,
    headerShadowVisible: false,
    headerStyle: Style.headerStyle,
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
    <Drawer.Navigator
      theme={colorValue}
      drawerContent={props => <CustomSidebarMenu {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
      <Drawer.Screen
        name={RouteName.HELP_SCREEN}
        component={HelpScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Help_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerRight: () => (
            <View style={Style.flexRowAlCen}>
              <TouchableOpacity
                style={Style.padRight}
                onPress={() =>
                  navigation.navigate(RouteName.NOTIFICTION_SCREEN)
                }>
                <VectorIcon
                  icon="Ionicons"
                  name="notifications-outline"
                  color={Colors.white_text_color}
                  size={SF(27)}
                />
              </TouchableOpacity>
              <ColorPicker />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={RouteName.FAQ_SCREEN}
        component={FAQScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('FAQ_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerRight: () => (
            <View style={Style.flexRowAlCen}>
              <TouchableOpacity
                style={Style.padRight}
                onPress={() =>
                  navigation.navigate(RouteName.NOTIFICTION_SCREEN)
                }>
                <VectorIcon
                  icon="Ionicons"
                  name="notifications-outline"
                  color={Colors.white_text_color}
                  size={SF(27)}
                />
              </TouchableOpacity>
              <ColorPicker />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={RouteName.NOTIFICTION_SCREEN}
        component={NotificationScreen}
        options={{
          headerShown: true,
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Notification_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerRight: () => (
            <View style={Style.flexRowAlCen}>
              <TouchableOpacity
                style={Style.padRight}
                onPress={() =>
                  navigation.navigate(RouteName.NOTIFICTION_SCREEN)
                }>
                <VectorIcon
                  icon="Ionicons"
                  name="notifications-outline"
                  color={Colors.white_text_color}
                  size={SF(27)}
                />
              </TouchableOpacity>
              <ColorPicker />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={RouteName.REVIEWS_SCREEN}
        component={ReviewsScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Reviews_Screen')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerRight: () => (
            <View style={Style.flexRowAlCen}>
              <TouchableOpacity
                style={Style.padRight}
                onPress={() =>
                  navigation.navigate(RouteName.NOTIFICTION_SCREEN)
                }>
                <VectorIcon
                  icon="Ionicons"
                  name="notifications-outline"
                  color={Colors.white_text_color}
                  size={SF(27)}
                />
              </TouchableOpacity>
              <ColorPicker />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={RouteName.SETTING_SCREEN}
        component={SettingsScreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Setting_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerRight: () => (
            <View style={Style.flexRowAlCen}>
              <TouchableOpacity
                style={Style.padRight}
                onPress={() =>
                  navigation.navigate(RouteName.NOTIFICTION_SCREEN)
                }>
                <VectorIcon
                  icon="Ionicons"
                  name="notifications-outline"
                  color={Colors.white_text_color}
                  size={SF(27)}
                />
              </TouchableOpacity>
              <ColorPicker />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={RouteName.YOUR_FRIEND}
        component={YourFriend}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Your_Friend_Label')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerRight: () => (
            <View style={Style.flexRowAlCen}>
              <TouchableOpacity
                style={Style.padRight}
                onPress={() =>
                  navigation.navigate(RouteName.NOTIFICTION_SCREEN)
                }>
                <VectorIcon
                  icon="Ionicons"
                  name="notifications-outline"
                  color={Colors.white_text_color}
                  size={SF(27)}
                />
              </TouchableOpacity>
              <ColorPicker />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={RouteName.CHAT_SCREEN}
        component={Chatscreen}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Chat_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerRight: () => (
            <View style={Style.flexRowAlCen}>
              <TouchableOpacity
                style={Style.padRight}
                onPress={() =>
                  navigation.navigate(RouteName.NOTIFICTION_SCREEN)
                }>
                <VectorIcon
                  icon="Ionicons"
                  name="notifications-outline"
                  color={Colors.white_text_color}
                  size={SF(27)}
                />
              </TouchableOpacity>
              <ColorPicker />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default SideNavigator;
