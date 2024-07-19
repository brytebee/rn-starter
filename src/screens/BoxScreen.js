import { StyleSheet, Text, View } from "react-native";

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Box Screen</Text>
      <Text style={styles.textTwoStyle}>Box Screen</Text>
      <Text style={styles.textThreeStyle}>Box Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    backgroundColor: "pink",
    height: 100,
    flex: 1,
  },
  textTwoStyle: {
    borderWidth: 3,
    backgroundColor: "green",
    height: 100,
    flex: 1,
    top: 100,
  },
  textThreeStyle: {
    borderWidth: 3,
    backgroundColor: "violet",
    height: 100,
    flex: 1,
  },
});
