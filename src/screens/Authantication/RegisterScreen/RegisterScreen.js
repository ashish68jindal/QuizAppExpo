import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import {
  Input,
  Button,
  CheckBox,
  Spacing,
  Countrycode,
  PasswordInput,
} from "../../../components";
import { SH } from "../../../utils";
import { RouteName } from "../../../routes";
import { Login, Style } from "../../../styles";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../config/firebase";

const Register = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const stateArray = {
    username: "",
    emailId: "",
    mobileNumber: "",
    toggleCheckBox: false,
  };
  const [state, setState] = useState(stateArray);
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  const { t } = useTranslation();
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [TextInputPassword, setTextInputPassword] = useState("");
  const onChangeText = (text) => {
    if (text === "TextInputPassword")
      setpasswordVisibility(!passwordVisibility);
  };
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const validate = () => {
    return (
      state.username === "" ||
      state.mobileNumber == "" ||
      state.emailId === "" ||
      TextInputPassword === "" ||
      state.username.length < 4 ||
      !emailRegex.test(state.emailId) ||
      !passwordRegex.test(TextInputPassword)
    );
  };

  const onAPICall = async () => {
    try {
      const docRef = doc(db, "quiz", "user");
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists() && state.emailId in docSnapshot.data()) {
        Alert.alert("Error", "User Already Exist");
        return;
      }

      const data = {
        [state.emailId]: {
          username: state.username,
          email: state.emailId,
          phone: state.mobileNumber,
          password: TextInputPassword,
        },
      };

      await setDoc(docRef, data, { merge: true });
      await AsyncStorage.setItem("login", "1");
      await AsyncStorage.setItem("email", state.emailId);
      await AsyncStorage.setItem("name", state.username);
      await AsyncStorage.setItem("phone", state.mobileNumber);
      await AsyncStorage.setItem("password", TextInputPassword);
      await navigation.replace(RouteName.REGIATRAION_SUCCESSFULL);

      // Clear input fields after adding exam
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  // const onAPICall = async () => {
  //   createUserWithEmailAndPassword(auth, state.emailId, TextInputPassword)
  //     .then(async (userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       await updateProfile(user, {
  //         displayName: state.username,
  //       });
  //       await AsyncStorage.setItem("login", "1");
  //       await AsyncStorage.setItem("token", user?.stsTokenManager?.accessToken);
  //       await AsyncStorage.setItem("email", user?.email);
  //       await AsyncStorage.setItem("name", user?.displayName);
  //       await navigation.replace(RouteName.REGIATRAION_SUCCESSFULL);

  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       Alert.alert(errorMessage);
  //     });
  // };


  return (
    <View style={Logins.MinViewBgColor}>
      <ScrollView contentContainerStyle={Style.ScrollViewStyle}>
        <View style={Logins.Container}>
          <View style={Style.MinViewContent}>
            <View style={Logins.TopSpaceRegister}>
              <Text style={Logins.RegisterText}>{t("Sign_Up_Text")}</Text>
            </View>
            <Input
              title={t("Enter_Your_Name")}
              placeholder={t("Enter_Your_Name")}
              onChangeText={(text) => setState({ ...state, username: text })}
              value={state.username}
              errorMessage={
                state.username
                  ? state.username.length < 4
                    ? "Name should be at least 5 character"
                    : ""
                  : ""
              }
            />
            <Spacing space={SH(20)} />
            <View style={Style.FlexRowPassword}>
              <View style={Style.InputViewWidth}>
                <View style={Style.CountryCodeIconCenter}>
                  <Countrycode />
                </View>
                <Input
                  title={t("Mobile_Number")}
                  placeholder={t("Mobile_Number")}
                  onChangeText={(text) =>
                    setState({ ...state, mobileNumber: text })
                  }
                  value={state.mobileNumber}
                  maxLength={10}
                  inputType="numeric"
                  placeholderTextColor={Colors.gray_text_color}
                  inputStyle={Style.PaddingLeftCountryInput}
                />
              </View>
            </View>
            <Spacing space={SH(20)} />
            <Input
              title={t("Enter_Your_Email")}
              placeholder={t("Enter_Your_Email")}
              onChangeText={(text) => setState({ ...state, emailId: text })}
              value={state.emailId}
              placeholderTextColor={Colors.gray_text_color}
              errorMessage={
                state.emailId
                  ? !emailRegex.test(state.emailId)
                    ? "Please Enter a Valid Email Id"
                    : ""
                  : ""
              }
            />
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
            <Spacing space={SH(20)} />
            <View style={Logins.FlexRowChekBox}>
              <View style={Logins.CheckBoxView}>
                <CheckBox
                  checked={checked}
                  onPress={toggleCheckbox}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor={Colors.theme_background}
                />
              </View>
              <Text style={Logins.SimpleTextStyle}>
                {t("I_Agree_Text")}{" "}
                <Text style={Logins.borderbottomTwo}>
                  <Text
                    style={Logins.bluecolor}
                    onPress={() =>
                      Linking.openURL("https://myaccount.google.com/")
                    }
                  >
                    {" "}
                    {t("Terms_Of_Service")}{" "}
                  </Text>
                </Text>
                {t("And_text")}{" "}
                <Text
                  onPress={() =>
                    Linking.openURL("https://myaccount.google.com/")
                  }
                  style={Logins.bluecolor}
                >
                  {t("Privacy_Policy")}
                </Text>
              </Text>
            </View>
            <Spacing space={SH(20)} />
            <View style={Logins.ButtonView}>
              <Button
                disable={validate()}
                title={t("Sign_Up_Text")}
                onPress={() => onAPICall()}
              />
            </View>
            <Spacing space={SH(20)} />
            <View style={Logins.TopSpace}>
              <View style={Logins.AlredyAndLoginBox}>
                <Text style={Logins.MemberTextStyle}>
                  {t("Already_Member")}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}
                >
                  <Text style={Logins.LoginScreenText}>{t("Login_Text")}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Register;
