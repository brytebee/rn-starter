import React, { useState } from "react";
import { Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_VALUE = 25;

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_VALUE)}
        onDecrease={() => setRed(red - COLOR_VALUE)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_VALUE)}
        onDecrease={() => setGreen(green - COLOR_VALUE)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_VALUE)}
        onDecrease={() => setBlue(blue - COLOR_VALUE)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
}
