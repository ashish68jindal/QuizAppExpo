import React, { useMemo, useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { SW } from "../../utils";

function Lottie(props) {
  const { source, Lottiewidthstyle, centerlottw } = props;
  const animation = useRef();
  const animationProgress = useRef(new Animated.Value(0));
  useEffect(() => {
    animation?.current?.play();
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);
  const styles = useMemo(() =>
    StyleSheet.create({
      Setlottesfilestyle: {
        width: SW(330),
      },
      centerlottw: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
      },
    })
  );
  return (
    <View style={[styles.centerlottw, { ...centerlottw }]}>
      <LottieView
        ref={animation}
        resizeMode="cover"
        style={[styles.Setlottesfilestyle, { ...Lottiewidthstyle }]}
        autoPlay={true}
        source={source}
        // progress={animationProgress.current}
      />
    </View>
  );
}
export default Lottie;
