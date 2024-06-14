import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { HomeTabStyle } from '../../styles';
import { SH, SF } from '../../utils';
import { Spacing, VectorIcon } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const FaviroutList = (props) => {
    const { item, onPress } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={HomeTabStyles.MinviewWidth}>
                <View>
                    <Image source={item.Image} style={HomeTabStyles.ImageStyle} />
                </View>
                <View style={HomeTabStyles.AllSidePadding}>
                    <View style={HomeTabStyles.MinViewFlexTop}>
                        <View style={HomeTabStyles.MinTitleView}>
                            <Text style={HomeTabStyles.HomeTitletext}>{t(item.Property)}</Text>
                        </View>
                        <View style={HomeTabStyles.FlexRowRating}>
                            <VectorIcon icon="Entypo" name="star" color={Colors.theme_background} size={SF(20)} />
                            <Text style={HomeTabStyles.RatingText}>{item.Rating}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(2)} />
                    <View style={HomeTabStyles.LocationViewFlex}>
                        <View style={HomeTabStyles.LocationViewIcon}>
                            <VectorIcon icon="Entypo" name="location-pin" color={Colors.theme_background} size={SF(20)} />
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
                        <TouchableOpacity>
                            <VectorIcon icon="FontAwesome" name={"bookmark"} size={SF(23)} color={Colors.theme_background} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default FaviroutList;