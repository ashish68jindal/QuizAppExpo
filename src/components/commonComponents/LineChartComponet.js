import React from 'react'
import { LineChart } from "react-native-gifted-charts";

const LineChartComponet = (props) => {
   const { data, startFillColor, startOpacity, endFillColor, endOpacity, width } = props;
   return (
      <>
         <LineChart
            curved
            areaChart
            data={data}
            startFillColor={startFillColor}
            startOpacity={startOpacity}
            endFillColor={endFillColor}
            endOpacity={endOpacity}
            initialSpacing={0}
            width={width}
         />
      </>
   )
}

export default LineChartComponet