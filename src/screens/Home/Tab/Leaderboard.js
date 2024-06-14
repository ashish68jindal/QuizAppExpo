import React, { useMemo } from 'react';
import { View, } from 'react-native';
import { LeaderboardStyle } from '../../../styles';
import { SF, SW } from '../../../utils';
import { Container, VectorIcon, SwipeListViewFun, LeaderBordFlatList, Spacing } from '../../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import images from '../../../index';

const Leaderboard = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const LeaderboardStyles = useMemo(() => LeaderboardStyle(Colors), [Colors]);

    const renderHiddenItem = ({ item }) => (
        <View style={LeaderboardStyles.sideBtnBox}>
            <View style={LeaderboardStyles.sideSUbBtn}>
                <VectorIcon icon="Feather" name="users" size={SF(25)} color={Colors.white_text_color} />
            </View>
            <View style={[LeaderboardStyles.sideSUbBtn, LeaderboardStyles.colorRed]}>
                <VectorIcon icon="AntDesign" name="hearto" size={SF(25)} color={Colors.white_text_color} />
            </View>
        </View>
    );

    const leaderBoardData = [
        {
          id: 1,
          avtar: images.leadboardUserImg1,
          name: "LeardBord_Name_1",
          xpGain: "Gain_XP_Label_1",
          srNum: "1"
        },
        {
          id: 2,
          avtar: images.leadboardUserImg2,
          name: "LeardBord_Name_2",
          xpGain: "Gain_XP_Label_2",
          srNum: "2"
        },
        {
          id: 3,
          avtar: images.leadboardUserImg3,
          name: "LeardBord_Name_3",
          xpGain: "Gain_XP_Label_3",
          srNum: "3"
        },
        {
          id: 4,
          avtar: images.leadboardUserImg4,
          name: "LeardBord_Name_4",
          xpGain: "Gain_XP_Label_4",
          srNum: "4"
        },
        {
          id: 5,
          avtar: images.leadboardUserImg5,
          name: "LeardBord_Name_5",
          xpGain: "Gain_XP_Label_5",
          srNum: "5"
        },
        {
          id: 6,
          avtar: images.leadboardUserImg6,
          name: "LeardBord_Name_6",
          xpGain: "Gain_XP_Label_6",
          srNum: "6"
        },
        {
          id: 7,
          avtar: images.leadboardUserImg7,
          name: "LeardBord_Name_7",
          xpGain: "Gain_XP_Label_7",
          srNum: "7"
        },
        {
          id: 8,
          avtar: images.leadboardUserImg8,
          name: "LeardBord_Name_8",
          xpGain: "Gain_XP_Label_8",
          srNum: "8"
        },
        {
          id: 9,
          avtar: images.leadboardUserImg9,
          name: "LeardBord_Name_9",
          xpGain: "Gain_XP_Label_9",
          srNum: "9"
        },
        {
          id: 10,
          avtar: images.leadboardUserImg10,
          name: "LeardBord_Name_10",
          xpGain: "Gain_XP_Label_10",
          srNum: "10"
        },
      ]
      

    return (
        <Container>
            <Spacing />
            <View style={LeaderboardStyles.wraper}>
                <SwipeListViewFun
                    data={leaderBoardData}
                    renderItem={({ item, index }) => (<LeaderBordFlatList item={item} />)}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={0}
                    disableLeftSwipe={false}
                    rightOpenValue={SW(-120)}
                    previewOpenDelay={3000}
                    disableRightSwipe={false}
                />
            </View>
        </Container>
    );
};
export default Leaderboard;