import React, { useMemo } from 'react';
import { View, Text, Image, } from 'react-native';
import { Spacing, VectorIcon } from '../../components';
import { LeaderboardStyle } from '../../styles';
import { SF, SH, Colors } from '../../utils';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import images from '../../index';

const LeaderBordFlatList = (props) => {
   const { item, } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const LeaderboardStyles = useMemo(() => LeaderboardStyle(Colors), [Colors]);

   return (
      <View style={LeaderboardStyles.LeaderboardBoxStyle}>
         <View style={LeaderboardStyles.flexRowAlcen}>
            <Image source={item.avtar} style={LeaderboardStyles.homeProfileImg} />
            <View>
               <Text style={LeaderboardStyles.nameTetx}>{t(item.name)}</Text>
               <Spacing space={SH(6)} />
               <Text style={LeaderboardStyles.xpGainText}>{t(item.xpGain)}</Text>
            </View>
         </View>
         <View style={LeaderboardStyles.flexRowAlcen}>
            <View>
               <View style={LeaderboardStyles.srnumStyle}>
                  <Text style={LeaderboardStyles.srNumText}>{t(item.srNum)}</Text>
               </View>
               <Image source={images.rankIcon} resizeMode="contain" style={LeaderboardStyles.rankIocn} />
            </View>
            <VectorIcon icon="MaterialCommunityIcons" name="dots-vertical" color={Colors.theme_background} size={SF(25)} />
         </View>
      </View>
   )
}

export default LeaderBordFlatList