import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { SF, SH, Colors } from '../../utils';
import { Input, VectorIcon } from '../../components';
import { useTranslation } from "react-i18next";

const SearchScreenset = (props) => {
    const { t } = useTranslation();
    const { placeholder, value, onChangeText, BorderWidth } = props;

    const styles = useMemo(
        () =>
            StyleSheet.create({
                WidthSet: {
                    width: '100%',
                },
                SearchInputBorder: {
                    borderWidth: SH(0),
                    fontSize: SF(17)
                },
                BorderWidth: {
                    borderWidth: SH(0),
                    width: '100%',
                    borderColor: Colors.theme_background,
                    height: SH(53),
                    borderRadius: SH(300),
                    backgroundColor: Colors.white_text_color,
                    ...BorderWidth,
                },
            }),
        [],
    );
    return (
        <View style={[styles.BorderWidth, BorderWidth]}>
            <TouchableOpacity style={styles.WidthSet}>
                <Input
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    leftIcon={<VectorIcon name="search1" icon="AntDesign" color={Colors.gray_text_color} size={SF(25)} />}
                    placeholderTextColor={Colors.gray_text_color}
                    inputStyle={styles.SearchInputBorder}
                />
            </TouchableOpacity>
        </View>
    );
};
export default SearchScreenset;
