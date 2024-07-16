import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a color"
        styles={styles.btnStyle}
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => (
          <View style={{ width: 100, height: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "rgb(0, 255, 0)",
  },
});

export default ColorScreen;
