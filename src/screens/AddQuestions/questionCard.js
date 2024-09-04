import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Icon } from "react-native-elements";
import { closeAlert, showAlert } from "react-native-customisable-alert";
import { SF, SH, SW } from "../../utils";

const QuestionCard = ({ item, index, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [heightAnim] = useState(new Animated.Value(10));

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(heightAnim, {
      toValue: expanded ? 0 : SH(300),
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.infoContainer}>
          <Text style={{ fontWeight: "bold", color: "black" }}>
            {item.Question}
          </Text>
          <Text style={styles.tableCelll}>{`Level : ${item.Levels}`}</Text>
          <Text style={styles.tableCelll}>{`Subject : ${item.Subjects}`}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonn} onPress={toggleExpand}>
        <Text style={styles.buttonTextt}>
          {expanded ? "Show Less" : "Show More"}
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={[styles.details, { height: heightAnim, overflow: "hidden" }]}
      >
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCelllll}>Option A:</Text>
            <Text numberOfLines={1} style={styles.tableCell}>
              {item.OptionA}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCelllll}>Option B:</Text>
            <Text numberOfLines={1} style={styles.tableCell}>
              {item.OptionB}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCelllll}>Option C:</Text>
            <Text numberOfLines={1} style={styles.tableCell}>
              {item.OptionC}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCelllll}>Option D:</Text>
            <Text numberOfLines={1} style={styles.tableCell}>
              {item.OptionD}
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCelllll}>Correct Answer:</Text>
            <Text numberOfLines={1} style={styles.tableCell}>
              {item.Answer}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.button1]}
              onPress={() => onEdit(item)}
            >
              <Text
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  fontSize: SF(16),
                  marginRight: SW(10),
                }}
              >
                Edit
              </Text>
              <Icon name="edit" type="font-awesome-5" size={14} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.button2]}
              onPress={() =>
                showAlert({
                  title: " ",
                  message: `Are you sure you want to delete  ?`,
                  alertType: "warning",
                  btnLabel: "Delete",
                  onPress: () => {
                    closeAlert();
                    onDelete(item);
                  },
                })
              }
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: SF(16),
                  marginRight: SW(10),
                }}
              >
                Delete
              </Text>
              <Icon
                name="trash"
                type="font-awesome-5"
                size={14}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: SW(12),
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: SH(10),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: SW(16),
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    width: SW(90),
    height: SH(90),
    marginRight: SW(16),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SW(8),
  },
  infoContainer: {
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    color: "#000000",
    fontSize: SF(15),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: SW(10),
    paddingHorizontal: SW(20),
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  button: {
    flexDirection: "row",
    paddingHorizontal: SW(20),
    padding: SW(10),
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: SW(10),
  },
  button1: {
    backgroundColor: "white",
    borderWidth: SW(1),
    borderColor: "black",
  },
  buttonn: {
    backgroundColor: "#E5E4E2",
    color: "black",
    paddingVertical: SH(12),
    paddingHorizontal: SW(20),
    borderRadius: SW(8),
    alignItems: "center",
    alignSelf: "center",
    marginTop: SH(12),
    width: SW(300),
  },
  button2: {
    backgroundColor: "black",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  buttonTextt: {
    color: "black",
    fontWeight: "bold",
  },
  details: {
    paddingHorizontal: SW(16),
    paddingBottom: SH(16),
  },
  table: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  tableCell: {
    fontSize: 14,
    color: "#333333",
    flex: 1,
    textAlign: "right",
  },
  tableCelllll: {
    fontSize: 14,
    color: "#333333",
    flex: 1,
    fontWeight: "bold",
    // textAlign: 'right',
  },
  tableCelll: {
    fontSize: 15,
    color: "black",
    flex: 1,
    marginLeft: 1,
  },
  container: {
    flex: 1,
    padding: SW(10),
  },
});

export default QuestionCard;
