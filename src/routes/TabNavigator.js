import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab, Leaderboard, ProfileTab, HistoryTab} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Style} from '../styles';
import {
  ColorPicker,
  CustomSidebarMenu,
  HeaderLeftMenuIcon,
  VectorIcon,
  AppHeader,
} from '../components';
import RouteName from '../routes/RouteName';
import {Colors, SH, SF} from '../utils';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderArray = {
  headerShown: true,
  headerStyle: Style.headerStyle,
  headerShadowVisible: false,
};
function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScsreenTabAll"
      drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen
        name="HomeScsreenTabAll"
        options={{headerShown: false}}
        component={HomeScsreenTabAll}
      />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator screenOptions="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Homese"
        component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack(props) {
  const {t} = useTranslation();
  const {navigation} = props;
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Home_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
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
    </Stack.Navigator>
  );
}
function LeaderboardScreenStack(props) {
  const {t} = useTranslation();
  const {navigation} = props;

  return (
    <Stack.Navigator initialRouteName="Leaderboard">
      <Stack.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Leaderboard_Label')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
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
    </Stack.Navigator>
  );
}
function HistoryTabSceenStack(props) {
  const {t} = useTranslation();
  const {navigation} = props;

  return (
    <Stack.Navigator initialRouteName="HistoryTab">
      <Stack.Screen
        name="HistoryTab"
        component={HistoryTab}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('History_Label')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
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
    </Stack.Navigator>
  );
}
function ProfileScreenStack(props) {
  const {t} = useTranslation();
  const {navigation} = props;

  return (
    <Stack.Navigator initialRouteName="ProfileTab">
      <Stack.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{
          headerTitle: props => (
            <AppHeader {...props} headerTitle={t('Profile_Text')} />
          ),
          ...HeaderArray,
          headerStyle: {
            backgroundColor: Colors.theme_background,
          },
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
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
    </Stack.Navigator>
  );
}
export function HomeScsreenTabAll() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.theme_background,
        tabBarInactiveTintColor: Colors.gray_text_color,
        labeled: true,
        labelStyle: {},
        tabStyle: {
          height: SH(60),
          backgroundColor: Colors.white_text_color,
          paddingBottom: SH(10),
        },
      }}>
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: t('Home_Text'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              color={focused ? Colors.theme_background : Colors.gray_text_color}
              name="home"
              icon="AntDesign"
              size={SF(25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.LEADERBOARD}
        component={LeaderboardScreenStack}
        options={{
          tabBarLabel: t('Leaderboard_Label'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              color={focused ? Colors.theme_background : Colors.gray_text_color}
              name="trophy"
              icon="Entypo"
              size={SF(25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.HISTORYTAB}
        component={HistoryTabSceenStack}
        options={{
          tabBarLabel: t('History_Label'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              color={focused ? Colors.theme_background : Colors.gray_text_color}
              name="history"
              icon="Octicons"
              size={SF(25)}
            />
          ),
        }}
      />

      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: t('Profile_Text'),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              color={focused ? Colors.theme_background : Colors.gray_text_color}
              name="user-circle"
              icon="FontAwesome"
              size={SF(20)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
