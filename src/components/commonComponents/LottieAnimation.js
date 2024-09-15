import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

function LottieAnimation(props) {
  const { source, colorFilters = [] } = props;
  const animation = useRef();
  useEffect(() => {
    if (animation?.current) {
      animation?.current?.play();
    }
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems:'center',
        alignSelf:'center',
        flex: 1,
      }}
    >
      <LottieView
        ref={animation}
        style={{
          width: '100%',
          height:'90%'
        }}
        colorFilters={colorFilters}
        autoPlay={true}
        loop={true}
        source={source}
      />
    </View>
  );
}
export default LottieAnimation;
