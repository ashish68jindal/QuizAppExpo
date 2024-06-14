import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootNavigator from "./src/routes/RootNavigator";
import { store, persistor } from "./src/redux/store";
import { useFonts } from "expo-font";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(async () => {
    await Font.loadAsync({
      Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"), // 400
      Poppins_Medium: require("./assets/fonts/Poppins-Medium.ttf"), // 500
      Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"), // 700
      Poppins_Italic: require("./assets/fonts/Poppins-Italic.ttf"), // 400
      Poppins_MediumItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"), // 500
      Poppins_BoldItalic: require("./assets/fonts/Poppins-BoldItalic.ttf"), // 700
    });
    setFontLoaded(true);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};
export default App;
