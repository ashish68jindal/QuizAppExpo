import React from 'react';
import { PieChart } from "react-native-gifted-charts";

const PieChartComponent = (props) => {
    const { radius, textColor, innerRadius, textSize, textBackgroundRadius, data, centerLabelComponent, innerCircleColor } = props;
    return (
        <>
            <PieChart
                donut
                innerCircleB
                radius={radius}
                textColor={textColor}
                innerRadius={innerRadius}
                textSize={textSize}
                textBackgroundRadius={textBackgroundRadius}
                data={data}
                centerLabelComponent={centerLabelComponent}
                innerCircleColor={innerCircleColor}
            />
        </>
    )
}

export default PieChartComponent