import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, heightPercent, SF, SH, SW } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useSelector } from "react-redux";


function DropdownComponent({
    width,
    data,
    labelField,
    valueField,
    placeholder,
    search,
    searchPlaceholder,
    onChange,
    maxHeight,
    value,
    labelStyle,
    placeholderStyle,
    selectedTextStyle,
    dropdownStyle,
    onChangeText
}) {
    const { colors } = useTheme();
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: { width: width },
                dropdownStyle: {
                    borderWidth: SH(1),
                    borderColor: colors.input_border,
                    borderRadius: SH(8),
                    fontSize: SF(14),
                    lineHeight: SF(17),
                    color: colors.black,
                    fontWeight: '400',
                    padding: SH(5),
                    paddingHorizontal: SW(10),
                    minHeight: SH(60),
                    ...dropdownStyle
                },
                icon: {
                    marginRight: 5,
                },
                label: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    paddingHorizontal: SW(10),
                    fontSize: SF(20),
                    color: Colors.gray,
                    ...labelStyle
                },
                placeholderStyle: {
                    fontSize: SF(18),
                    lineHeight: SF(21),
                    color: Colors.gray,
                    paddingHorizontal: SW(10),
                    ...placeholderStyle
                },
                selectedTextStyle: {
                    fontSize: SF(18),
                    paddingHorizontal: SW(10),
                    // lineHeight: SF(21),
                    ...selectedTextStyle
                },
                iconStyle: {
                    width: SW(20),
                    height: SH(20),
                },
            }),
        [dropdownStyle, labelStyle, placeholder, selectedTextStyle]
    )

    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdownStyle}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={[styles.selectedTextStyle, { color: colorrdata }]}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search={search}
                searchPlaceholder={searchPlaceholder}
                maxHeight={maxHeight}
                labelField={labelField}
                valueField={valueField}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onChangeText={onChangeText}
                itemTextStyle={{ color: '#000' }}
            />
        </View>
    );
};

export default DropdownComponent;
