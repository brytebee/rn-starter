import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Welcome back to mobile!</Text>
      <Button
        title="Go to Component demo"
        onPress={() => navigate("Components")}
        style={styles.btnStyle}
      />
      <Button
        title="Go to List demo"
        onPress={() => navigate("List")}
        style={styles.btnStyle}
      />
      <Button
        title="Go to Image demo"
        onPress={() => navigate("Image")}
        style={styles.btnStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    position: "flex",
  },
  text: {
    fontSize: 30,
  },
  btnStyle: {
    padding: 20,
  },
});

export default HomeScreen;
