import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
}

const styles = StyleSheet.create({});
