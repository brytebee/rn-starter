import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text style={styles.textStyle}>Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
  },
});

export default CounterScreen;
