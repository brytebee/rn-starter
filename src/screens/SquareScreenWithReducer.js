import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_VALUE = 25;

const reducer = (state, action) => {
  // state = { red: number || green: number || blue: number }
  // action = { colorToChange: 'red' || "green" || "blue", amount: 25 or -25 }

  const { red, green, blue } = state;
  console.log({ red, green, blue });
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

export default function SquareScreenRed() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_VALUE })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_VALUE })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_VALUE })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_VALUE })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_VALUE })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_VALUE })
        }
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
