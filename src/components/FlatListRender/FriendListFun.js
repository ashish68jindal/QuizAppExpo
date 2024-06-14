import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { YourFriendStyle, } from '../../styles';
import { Colors, SF, SH, } from "../../utils";
import { VectorIcon, BadgeDot } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const FriendListFun = (props) => {
   const { item, onPress } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const YourFriendStyles = useMemo(() => YourFriendStyle(Colors), [Colors]);

   return (
      <TouchableOpacity onPress={() => onPress()} style={[YourFriendStyles.flexRowAlcenJusSpBtn, YourFriendStyles.chatbox]}>
         <View style={YourFriendStyles.flexRowAlcen}>
            <Image source={item.avtar} style={YourFriendStyles.homeProfileImg} />
            <View style={YourFriendStyles.padH20}>
               <Text style={YourFriendStyles.avtarName}>{t(item.avtarName)}</Text>
               <Text style={YourFriendStyles.friendXpLevel}>{t(item.friendXpLevel)}</Text>
            </View>
         </View>
         <View>
            <VectorIcon icon="AntDesign" name="message1" color={Colors.theme_background} size={SF(30)} />
            {
               item.msgBadge !== null && <BadgeDot
                  status={"error"}
                  value={item.msgBadge}
                  containerStyle={YourFriendStyles.badgeContainer}
                  textStyle={YourFriendStyles.textStyle}
                  badgeStyle={YourFriendStyles.badgeStyle}
               />
            }
         </View>
      </TouchableOpacity>
   )
}

export default FriendListFun