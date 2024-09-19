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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { closeAlert, showAlert } from "react-native-customisable-alert";

const LoginScreen = (props) => {
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [TextInputPassword, setTextInputPassword] = useState("");
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  const onChangeText = (text) => {
    if (text === "TextInputPassword")
      setpasswordVisibility(!passwordVisibility);
  };
  const { t } = useTranslation();

  const validate = () => {
    return (
      email === "" ||
      TextInputPassword == "" ||
      !emailRegex.test(email) ||
      !passwordRegex.test(TextInputPassword)
    );
  };

  const onAPICall = async () => {
    try {
      const docRef = doc(db, "quiz", "user");
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists() && email in docSnapshot.data()) {
        const data = docSnapshot.data();
        const res = Object.values(data);
        const loginData = res[0];
        if (loginData.password === TextInputPassword) {
          await AsyncStorage.setItem("login", "1");
          await AsyncStorage.setItem("email", loginData.email);
          await AsyncStorage.setItem("name", loginData.username);
          await AsyncStorage.setItem("phone", loginData.phone);
          await AsyncStorage.setItem("password", loginData.password);
          await navigation.replace(RouteName.SIDE_NAVIGATOR);
        } else {
          showAlert({
            title: " ",
            message: `Invalid Password`,
            alertType: "error",
            btnLabel: "Ok",
            onPress: () => {
              closeAlert();
            },
          });
        }
      } else {
        showAlert({
          title: " ",
          message: `Invalid Email Id`,
          alertType: "error",
          btnLabel: "Ok",
          onPress: () => {
            closeAlert();
          },
        });
      }

      // Clear input fields after adding exam
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  // const onAPICall = async () => {
  //   signInWithEmailAndPassword(auth, email, TextInputPassword)
  //     .then(async (userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       await AsyncStorage.setItem("login", "1");
  //       await AsyncStorage.setItem("email", user?.email);
  //       await AsyncStorage.setItem("name", user?.displayName);
  //       await AsyncStorage.setItem("user", JSON.stringify(user));
  //       await navigation.replace(RouteName.SIDE_NAVIGATOR);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       Alert.alert(errorMessage);
  //     });
  // // };

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
                  errorMessage={
                    email
                      ? !emailRegex.test(email)
                        ? "Please Enter a Valid Email Id"
                        : ""
                      : ""
                  }
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
                errorMessage={
                  TextInputPassword
                    ? !passwordRegex.test(TextInputPassword)
                      ? "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                      : ""
                    : ""
                }
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
