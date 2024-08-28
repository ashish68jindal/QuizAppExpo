import React, { useState, useMemo } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Container,
  Input,
  Spacing,
  VectorIcon,
  PasswordInput,
} from "../../../components";
import { RouteName } from "../../../routes";
import { Style, Login } from "../../../styles";
import { SH, SF, baseUrl } from "../../../utils";
import { useTheme } from "@react-navigation/native";
import images from "../../../index";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props) => {
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [TextInputPassword, setTextInputPassword] = useState("");
  const onChangeText = (text) => {
    if (text === "TextInputPassword")
      setpasswordVisibility(!passwordVisibility);
  };
  const { t } = useTranslation();

  const validate = () => {
    return email === "" || TextInputPassword == "";
  };

  const onAPICall = async () => {
    fetch(`${baseUrl()}login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: TextInputPassword,
      }),
    })
      .then((resp) => resp.json())
      .then(async (json) => {
        const { data } = json;
        if (json.statuscode === 200) {
          await AsyncStorage.setItem("login", "1");
          await AsyncStorage.setItem("token", data.accessToken);
          await AsyncStorage.setItem("email", data?.user?.email);
          await AsyncStorage.setItem("name", data?.user?.name);
          await AsyncStorage.setItem("phone", data?.user?.phone);
          await navigation.replace(RouteName.SIDE_NAVIGATOR);
        }
      })
      .catch((error) => console.error(error));
  };

  const OnRegisterPress = () => {
    navigation.navigate(RouteName.REGISTER_SCREEN);
  };

  return (
    <Container>
      <View style={Logins.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.ScrollViewStyles}
        >
          <View style={Logins.Container}>
            <View style={Style.MinViewContent}>
              <View style={Logins.ManViewLogins}>
                <Image
                  style={Logins.ImageSet}
                  resizeMode="contain"
                  source={images.login}
                />
              </View>
              <Text style={Logins.LoginText}>{t("Login_Text")}</Text>
              <Spacing space={SH(20)} />
              <View style={Logins.InputSpaceView}>
                <Input
                  title={t("Enter_Your_Email")}
                  placeholder={t("Enter_Your_Email")}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  placeholderTextColor={Colors.gray_text_color}
                />
              </View>
              <PasswordInput
                name={passwordVisibility ? "eye-off" : "eye"}
                label={t("Password_Text")}
                placeholder={t("Password_Text")}
                value={TextInputPassword}
                onPress={() => {
                  onChangeText("TextInputPassword");
                }}
                onChangeText={(text) => setTextInputPassword(text)}
                secureTextEntry={passwordVisibility}
              />
              <Spacing space={SH(10)} />
              <View style={Logins.ViewTextStyle}>
                <Text style={Logins.TextStyle}>
                  {t("Dont_Have_Account")}{" "}
                  <Text
                    style={Logins.registerTextStyle}
                    onPress={() => OnRegisterPress()}
                  >
                    {" "}
                    {t("Register_Text")}
                  </Text>
                </Text>
              </View>
              <Spacing space={SH(40)} />
              <View style={Logins.LoginButton}>
                <Button
                  disable={validate()}
                  title={t("Login_Text")}
                  onPress={() => onAPICall()}
                />
              </View>
              <Spacing space={SH(10)} />
              <TouchableOpacity
                onPress={() => navigation.navigate(RouteName.FORGOT_PASSWORD)}
              >
                <Text style={Logins.ForgetPasswordStyles}>
                  {t("Forgot_Password")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default LoginScreen;
