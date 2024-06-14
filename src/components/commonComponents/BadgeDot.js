import React from 'react'
import { Badge } from '@rneui/themed';

const BadgeDot = (props) => {
    const { status, containerStyle, badgeStyle, value, textStyle } = props;
    return (
        <>
            <Badge
                status={status}
                containerStyle={containerStyle}
                badgeStyle={badgeStyle}
                value={value}
                textStyle={textStyle}
            />
        </>
    )
}

export default BadgeDot