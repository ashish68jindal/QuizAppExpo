import React, {  useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { HomeTabStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const AllProperty = (props) => {
    const { t } = useTranslation();
    const { item,onPress } = props;
    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => onPress()} style={HomeTabStyles.HomeSelectProparty}>
            <Text style={HomeTabStyles.HomeSelectPropartyTYext}>{t(item.text)}</Text>
        </TouchableOpacity>
    );
}
export default AllProperty;