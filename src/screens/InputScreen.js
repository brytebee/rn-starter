import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default function InputScreen() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter your password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={setName}
      />
      <Text>{name.length < 5 ? "Password should be longer" : null}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
  },
});
