import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const CircleCount = (props) => {
    const { value, radius, duration, progressValueColor, maxValue, title, titleColor, titleStyle, inActiveStrokeOpacity, activeStrokeWidth, inActiveStrokeWidth, activeStrokeColor, inActiveStrokeColor, valueSuffix, subtitle, } = props;
    return (
        <CircularProgress
            value={value}
            radius={radius}
            duration={duration}
            progressValueColor={progressValueColor}
            maxValue={maxValue}
            title={title}
            titleColor={titleColor}
            titleStyle={titleStyle}
            inActiveStrokeOpacity={inActiveStrokeOpacity}
            activeStrokeWidth={activeStrokeWidth}
            inActiveStrokeWidth={inActiveStrokeWidth}
            activeStrokeColor={activeStrokeColor}
            inActiveStrokeColor={inActiveStrokeColor}
            valueSuffix={valueSuffix}
            subtitle={subtitle}

        />
    )
}

export default CircleCount