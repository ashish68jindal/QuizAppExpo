import React, { useState, useMemo } from "react";
import { View, FlatList } from "react-native";
import { YourFriendStyle, } from '../../styles';
import { RouteName } from '../../routes';
import { SH } from "../../utils";
import { Spacing, Container, Search, FriendListFun } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { get_data_action } from '../../redux/action/DataAction';
import { useSelector, useDispatch } from "react-redux";
import images from '../../index';

const YourFriend = (props) => {
   const { navigation } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const YourFriendStyles = useMemo(() => YourFriendStyle(Colors), [Colors]);
   const [search, setSearch] = useState('');

   const dispatch = useDispatch();
   const { detailsStore } = useSelector(state => state.userDataReducer) || { detailsStore };

   const getDataAction = (getDataActiondata) => {
      dispatch(get_data_action(getDataActiondata))
      navigation.navigate(RouteName.CHAT_SCREEN)
   }

   const friendListData = [
      {
         id: 1,
         avtar: images.friendAvtarImg1,
         avtarName: "FriendListName_1",
         friendXpLevel: "Friend_XP_Lavel_Label_1",
         msgBadge: 2
      },
      {
         id: 2,
         avtar: images.friendAvtarImg2,
         avtarName: "FriendListName_2",
         friendXpLevel: "Friend_XP_Lavel_Label_2",
         msgBadge: 1
      },
      {
         id: 3,
         avtar: images.friendAvtarImg3,
         avtarName: "FriendListName_3",
         friendXpLevel: "Friend_XP_Lavel_Label_3",
         msgBadge: null
      },
      {
         id: 4,
         avtar: images.friendAvtarImg4,
         avtarName: "FriendListName_4",
         friendXpLevel: "Friend_XP_Lavel_Label_4",
         msgBadge: 2
      },
      {
         id: 5,
         avtar: images.friendAvtarImg5,
         avtarName: "FriendListName_5",
         friendXpLevel: "Friend_XP_Lavel_Label_5",
         msgBadge: null
      },
      {
         id: 6,
         avtar: images.friendAvtarImg6,
         avtarName: "FriendListName_6",
         friendXpLevel: "Friend_XP_Lavel_Label_6",
         msgBadge: null
      },
      {
         id: 7,
         avtar: images.friendAvtarImg7,
         avtarName: "FriendListName_7",
         friendXpLevel: "Friend_XP_Lavel_Label_7",
         msgBadge: 2
      },
      {
         id: 8,
         avtar: images.friendAvtarImg8,
         avtarName: "FriendListName_8",
         friendXpLevel: "Friend_XP_Lavel_Label_8",
         msgBadge: null
      },
   ]

   return (
      <Container>
         <Spacing space={SH(15)} />
         <View style={YourFriendStyles.padH20}>
            <Search
               placeholder={t("Search_Friend_Label")}
               onChangeText={(search) => setSearch(search)}
               value={search}
               BorderWidth={YourFriendStyles.searchBg}
            />
         </View>
         <Spacing space={SH(15)} />
         <FlatList
            data={friendListData}
            renderItem={({ item }) => (<FriendListFun item={item}
               onPress={() => getDataAction(item)}
            />)}
         />

      </Container>
   )
}

export default YourFriend