import React from 'react'
import { LinearProgress } from '@rneui/themed';

const ProgressBar = (props) => {
    const { value, color, trackColor, secondary, style } = props;
    return (
        <LinearProgress
            value={value}
            variant="determinate"
            color={color}
            style={style}
            trackColor={trackColor}
            secondary={secondary}
        />
    )
}

export default ProgressBar