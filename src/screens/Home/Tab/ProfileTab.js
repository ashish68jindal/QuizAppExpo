import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ProfileTabStyles, Style } from "../../../styles";
import {
  Button,
  Spacing,
  Input,
  VectorIcon,
  ConfirmationAlert,
  PasswordInput,
} from "../../../components";
import { SH, SF, baseUrl } from "../../../utils";
import images from "../../../index";
import RouteName from "../../../routes/RouteName";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  deleteField,
  doc,
  onSnapshot,
  setDoc,
  getDoc,
  updateDoc,
  FieldPath,
} from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { closeAlert, showAlert } from "react-native-customisable-alert";

const ProfileTab = (props) => {
  const { Colors } = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles);
  const { navigation } = props;
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState(0);
  const [passwordVisibilityold, setpasswordVisibilityold] = useState(true);
  const [passwordVisibilitynew, setpasswordVisibilitynew] = useState(true);
  const [passwordVisibilityconfirm, setPasswordVisibilityconfirm] =
    useState(true);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  const [state, setState] = useState({
    Oldpassword: "",
    Newpassword: "",
    email: "",
    Confirmpassword: "",
    number: null,
  });
  const onChangeText = (text) => {
    if (text === "Oldpassword") {
      setpasswordVisibilityold(!passwordVisibilityold);
    }
    if (text === "Newpassword") {
      setpasswordVisibilitynew(!passwordVisibilitynew);
    }
    if (text === "Confirmpassword") {
      setPasswordVisibilityconfirm(!passwordVisibilityconfirm);
    }
  };

  const APICall = async (key) => {
    if (key === 1) {
      if (state.number !== "") {
        try {
          const nameId = email;
          const docRef = doc(db, "quiz", "user");

          await updateDoc(docRef, new FieldPath(nameId), deleteField());

          const data = {
            [email]: {
              username: name,
              email: email,
              phone: state.number,
              password: password,
            },
          };
          await setDoc(docRef, data, { merge: true });

          await AsyncStorage.setItem("phone", state.number);
          setPhone(state.number);

          // Clear input fields after adding exam
        } catch (error) {
          console.log("ERROR:", error);
        }
      }
    }
    if (key === 2) {
      if (state.email !== "") {
        try {
          const nameId = email;
          const docRef = doc(db, "quiz", "user");
          const docSnapshot = await getDoc(docRef);

          if (docSnapshot.exists() && state.email in docSnapshot.data()) {
            showAlert({
              title: " ",
              message: `Email Already Exist`,
              alertType: "error",
              btnLabel: "Ok",
              onPress: () => {
                closeAlert();
              },
            });
          } else {
            await updateDoc(docRef, new FieldPath(nameId), deleteField());
            const data = {
              [state.email]: {
                username: name,
                email: state.email,
                phone: phone,
                password: password,
              },
            };
            await setDoc(docRef, data, { merge: true });

            await AsyncStorage.setItem("email", state.email);
            await setEmail(state.email);
          }

          // Clear input fields after adding exam
        } catch (error) {
          console.log("ERROR:", error);
        }
      }
    }

    if (key === 3) {
      if (
        state.Confirmpassword !== "" &&
        state.Newpassword !== "" &&
        state.Oldpassword !== ""
      ) {
        if (state.Oldpassword === password) {
          const nameId = email;
          const docRef = doc(db, "quiz", "user");

          await updateDoc(docRef, new FieldPath(nameId), deleteField());
          const data = {
            [nameId]: {
              username: name,
              email: email,
              phone: phone,
              password: state.Newpassword,
            },
          };
          await setDoc(docRef, data, { merge: true });
        } else {
          showAlert({
            title: " ",
            message: `Invalid Old Password`,
            alertType: "error",
            btnLabel: "Ok",
            onPress: () => {
              closeAlert();
            },
          });
        }
      }
    }
  };

  const setData = async () => {
    const emailId = await AsyncStorage.getItem("email");
    const userName = await AsyncStorage.getItem("name");
    const phoneNo = await AsyncStorage.getItem("phone");
    const password = await AsyncStorage.getItem("password");
    setPhone(phoneNo);
    setEmail(emailId);
    setName(userName);
    setPassword(password);
    setState({ ...state, email: emailId, number: phoneNo });
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      setModalVisible(false);
      setmodalcontent(0);
    });
    setData();
  }, [navigation]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  var alertdata = {
    logout: t("Are_You_Sure_logout"),
  };
  const onoknutton = async () => {
    await AsyncStorage.setItem("login", "0");
    await navigation.navigate(RouteName.LOGIN_SCREEN);
  };
  return (
    <View style={ProfileTabStyle.BackgroundWhite}>
      <View style={ProfileTabStyle.whilistminbody}>
        <ScrollView>
          <Spacing space={SH(30)} />
          <View style={ProfileTabStyle.ImagCenter}>
            <Image
              style={ProfileTabStyle.ImageStyles}
              resizeMode="cover"
              source={images.homeProfile}
            />
            <Text style={ProfileTabStyle.profileUserName}>{name}</Text>
          </View>
          <View style={ProfileTabStyle.ProfileDetailesMinview}>
            <Text style={ProfileTabStyle.EditProFile}>{t("Edit_Profile")}</Text>
            {phone && (
              <View style={ProfileTabStyle.PhoneNumberAndIcon}>
                <View style={ProfileTabStyle.BgWhiteShadow}>
                  <View>
                    <Text style={ProfileTabStyle.PhoneNumberText}>
                      {t("Phone_Number")}
                    </Text>
                    <Text style={ProfileTabStyle.DigitNumberText}>{phone}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(true);
                        setmodalcontent(1);
                      }}
                    >
                      <View>
                        <VectorIcon
                          icon="EvilIcons"
                          size={SF(30)}
                          name="pencil"
                          color={Colors.gray_text_color}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            {email && (
              <View style={ProfileTabStyle.PhoneNumberAndIcon}>
                <View style={ProfileTabStyle.BgWhiteShadow}>
                  <View style={ProfileTabStyle.setpadiingtext}>
                    <Text style={ProfileTabStyle.PhoneNumberText}>
                      {t("Email_Text")}
                    </Text>
                    <Text style={ProfileTabStyle.DigitNumberText}>{email}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(true);
                        setmodalcontent(2);
                      }}
                    >
                      <View>
                        <VectorIcon
                          icon="EvilIcons"
                          size={SF(30)}
                          name="pencil"
                          color={Colors.gray_text_color}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.BgWhiteShadow}>
                <View>
                  <Text style={ProfileTabStyle.PhoneNumberText}>
                    {t("Password_Text")}
                  </Text>
                  <Text style={ProfileTabStyle.DigitNumberText}>******</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                      setmodalcontent(3);
                    }}
                  >
                    <View>
                      <VectorIcon
                        icon="EvilIcons"
                        size={SF(30)}
                        name="pencil"
                        color={Colors.gray_text_color}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Spacing space={SH(20)} />
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.YOUR_FRIEND)}
            >
              <View style={ProfileTabStyle.IconAndTextFlex}>
                <Text style={ProfileTabStyle.LogOutView}>
                  {t("Your_Friend_Label")}
                </Text>
                <VectorIcon
                  icon="AntDesign"
                  size={SF(27)}
                  name="arrowright"
                  color={Colors.theme_background}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.SETTING_SCREEN)}
            >
              <View style={ProfileTabStyle.IconAndTextFlex}>
                <Text style={ProfileTabStyle.LogOutView}>
                  {t("Setting_Text")}
                </Text>
                <VectorIcon
                  icon="AntDesign"
                  size={SF(27)}
                  name="arrowright"
                  color={Colors.theme_background}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAlertVisible(true);
                setAlertMessage(alertdata.logout);
              }}
            >
              <View style={ProfileTabStyle.IconAndTextFlex}>
                <Text style={ProfileTabStyle.LogOutView}>{t("Log_Out")}</Text>
                <VectorIcon
                  icon="AntDesign"
                  size={SF(27)}
                  name="arrowright"
                  color={Colors.theme_background}
                />
              </View>
            </TouchableOpacity>

            {/* Modal Start */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={ProfileTabStyle.CenteredView}>
                <View style={ProfileTabStyle.ModalView}>
                  <View style={ProfileTabStyle.ShadowStyleModalTwo}>
                    <View style={ProfileTabStyle.AllPaddingModal}>
                      <TouchableOpacity
                        style={ProfileTabStyle.IconClose}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <VectorIcon
                          icon="AntDesign"
                          size={SF(25)}
                          name="close"
                          color={Colors.black_text_color}
                        />
                      </TouchableOpacity>
                      <View>
                        {modalcontent === 1 ? (
                          <Text style={ProfileTabStyle.ModalText}>
                            {t("Change_Phone_Number")}
                          </Text>
                        ) : modalcontent === 2 ? (
                          <Text style={ProfileTabStyle.ModalText}>
                            {t("Change_Email")}
                          </Text>
                        ) : (
                          <Text style={ProfileTabStyle.ModalText}>
                            {t("Change_Your_Password")}
                          </Text>
                        )}
                        <Spacing space={SH(10)} />

                        {modalcontent === 1 ? (
                          <Input
                            onChangeText={(text) =>
                              setState({ ...state, number: text })
                            }
                            value={state.number}
                            placeholderTextColor={Colors.gray_text_color}
                            inputType="numeric"
                            inputStyle={Style.Inputplace}
                          />
                        ) : modalcontent === 2 ? (
                          <View>
                            <Input
                              onChangeText={(text) =>
                                setState({ ...state, email: text })
                              }
                              value={state.email}
                              placeholderTextColor={Colors.gray_text_color}
                              inputStyle={Style.Inputplace}
                              errorMessage={
                                state.email
                                  ? !emailRegex.test(state.email)
                                    ? "Please Enter a Valid Email Id"
                                    : ""
                                  : ""
                              }
                            />
                          </View>
                        ) : modalcontent === 3 ? (
                          <>
                            <View style={Style.InputViewWidth}>
                              <Spacing space={SH(10)} />
                              <PasswordInput
                                name={passwordVisibilityold ? "eye-off" : "eye"}
                                label={t("Old_Password")}
                                placeholder={t("Old_Password")}
                                textContentType="newPassword"
                                secureTextEntry={passwordVisibilityold}
                                onChangeText={(text) =>
                                  setState({ ...state, Oldpassword: text })
                                }
                                value={state.Oldpassword}
                                errorMessage={
                                  state.Oldpassword
                                    ? !passwordRegex.test(state.Oldpassword)
                                      ? "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                                      : ""
                                    : ""
                                }
                                onPress={() => {
                                  onChangeText("Oldpassword");
                                }}
                                inputStyle={Style.Inputplace}
                              />
                              <Spacing space={SH(5)} />
                              <PasswordInput
                                name={passwordVisibilitynew ? "eye-off" : "eye"}
                                label={t("New_Password")}
                                placeholder={t("New_Password")}
                                textContentType="newPassword"
                                secureTextEntry={passwordVisibilitynew}
                                onChangeText={(text) =>
                                  setState({ ...state, Newpassword: text })
                                }
                                value={state.Newpassword}
                                enablesReturnKeyAutomatically
                                inputStyle={Style.Inputplace}
                                onPress={() => {
                                  onChangeText("Newpassword");
                                }}
                                errorMessage={
                                  state.Newpassword
                                    ? !passwordRegex.test(state.Newpassword)
                                      ? "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                                      : ""
                                    : ""
                                }
                              />
                              <Spacing space={SH(5)} />
                              <PasswordInput
                                name={
                                  passwordVisibilityconfirm ? "eye-off" : "eye"
                                }
                                label={t("Conform_Password")}
                                placeholder={t("Conform_Password")}
                                textContentType="newPassword"
                                secureTextEntry={passwordVisibilityconfirm}
                                onChangeText={(text) =>
                                  setState({ ...state, Confirmpassword: text })
                                }
                                value={state.Confirmpassword}
                                enablesReturnKeyAutomatically
                                inputStyle={Style.Inputplace}
                                errorMessage={
                                  state.Confirmpassword
                                    ? !passwordRegex.test(state.Confirmpassword)
                                      ? "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                                      : ""
                                    : ""
                                }
                                onPress={() => {
                                  onChangeText("Confirmpassword");
                                }}
                              />
                            </View>
                            <Spacing space={SH(10)} />
                          </>
                        ) : (
                          <Text style={ProfileTabStyle.ModalText}>
                            {t("Are_You_Sure")}
                          </Text>
                        )}
                        {modalcontent === 1 ||
                        modalcontent === 2 ||
                        modalcontent === 3 ? (
                          <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                            <View style={ProfileTabStyle.Marginright}>
                              <Button
                                onPress={() => {
                                  APICall(modalcontent);
                                  setModalVisible(!modalVisible);
                                }}
                                disable={
                                  modalcontent === 2
                                    ? state.email === "" ||
                                      !emailRegex.test(state.email)
                                    : modalcontent === 3
                                    ? state.Oldpassword === "" ||
                                      state.Confirmpassword === "" ||
                                      state.Newpassword === "" ||
                                      state.Confirmpassword !==
                                        state.Newpassword ||
                                      !passwordRegex.test(state.Oldpassword) ||
                                      !passwordRegex.test(state.Newpassword) ||
                                      !passwordRegex.test(state.Confirmpassword)
                                    : false
                                }
                                title={t("Ok")}
                              />
                            </View>
                            <View style={ProfileTabStyle.Marginright}>
                              <Button
                                buttonStyle={ProfileTabStyle.SingleButtonStyles}
                                buttonTextStyle={
                                  ProfileTabStyle.SingleButtonText
                                }
                                title={t("Cancel_Button")}
                                onPress={() => setModalVisible(!modalVisible)}
                              />
                            </View>
                          </View>
                        ) : (
                          <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                            <View style={ProfileTabStyle.MarginRightView}>
                              <Button
                                title={t("Log_Out")}
                                onPress={() => onoknutton()}
                              />
                            </View>
                            <View style={ProfileTabStyle.MarginRightView}>
                              <Button
                                title={t("Cancel_Button")}
                                onPress={() => setModalVisible(!modalVisible)}
                                buttonStyle={ProfileTabStyle.SingleButtonStyles}
                                buttonTextStyle={
                                  ProfileTabStyle.SingleButtonText
                                }
                              />
                            </View>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <ConfirmationAlert
            message={alertMessage}
            modalVisible={alertVisible}
            setModalVisible={setAlertVisible}
            onPressCancel={() => setAlertVisible(!alertVisible)}
            onPress={() => {
              setAlertVisible(!alertVisible), onoknutton();
            }}
            cancelButtonText={t("Cancel_Button")}
            buttonText={t("Ok")}
            cancelButtonTextStatus={true}
          />
        </ScrollView>
      </View>
    </View>
  );
};
export default ProfileTab;
