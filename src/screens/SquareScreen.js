import React, { useState } from "react";
import { View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_VALUE = 25;

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, value) => {
    // color = red, blue or green
    // value = COLOR_VALUE

    switch (color) {
      case "red":
        red + value > 255 || red + value < 0 ? null : setRed(red + value);
        return;
      case "green":
        green + value > 255 || green + value < 0
          ? null
          : setGreen(green + value);
        return;
      case "blue":
        blue + value > 255 || blue + value < 0 ? null : setBlue(blue + value);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_VALUE)}
        onDecrease={() => setColor("red", -1 * COLOR_VALUE)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_VALUE)}
        onDecrease={() => setColor("green", -1 * COLOR_VALUE)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_VALUE)}
        onDecrease={() => setColor("blue", -1 * COLOR_VALUE)}
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
