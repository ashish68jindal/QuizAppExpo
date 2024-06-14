import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { HomeTabStyle } from '../../styles';
import { SH, SF } from '../../utils';
import { Spacing, VectorIcon } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const AllProperty = (props) => {
    const [Bookmark, SetBookmark] = useState([]);
    const { t } = useTranslation();
    const { item, index,onPress } = props;
    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    const LikeUnlikeFun = () => {
        if (Bookmark.includes(index)) {
            let unlike11 = Bookmark.filter((elem) => elem !== index);
            SetBookmark(unlike11);
        }
        else {
            SetBookmark([...Bookmark, index]);
        }
    }
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={HomeTabStyles.MinviewWidth}>
                <View>
                    <Image source={item.Image} style={HomeTabStyles.ImageStyle} />
                </View>
                <View style={HomeTabStyles.AllSidePadding}>
                    <Text style={HomeTabStyles.HomeTitletext}>{t(item.Property)}</Text>
                    <Spacing space={SH(2)} />
                    <View style={HomeTabStyles.LocationViewFlex}>
                        <View style={HomeTabStyles.LocationViewIcon}>
                            <VectorIcon name="location-pin" icon="Entypo" color={Colors.theme_background} size={SF(20)} />
                        </View>
                        <View style={HomeTabStyles.LocationView}>
                            <Text style={HomeTabStyles.LocationText}>{t(item.Address)}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(5)} />
                    <View style={HomeTabStyles.SpaceBeetveen}>
                        <View>
                            <Text style={HomeTabStyles.DolarTextStyles}>{item.Price}</Text>
                        </View>
                        <TouchableOpacity
                           onPress={() => { LikeUnlikeFun() }}>
                            <VectorIcon name={Bookmark.includes(index) ? "bookmark" : "bookmark-o"} icon="FontAwesome" color={Colors.theme_background} size={SF(23)} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default AllProperty;