import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_VALUE = 25;

const reducer = (state, action) => {
  // action = { colorToChange: 'red' || "green" || "blue", amount: 25 or -25 }

  // meaningful naming
  // state = { red: number || green: number || blue: number }

  // community conventions
  // action = { type: 'change_red' || "change_green" || "change_blue", payload: 25 or -25 }

  const { red, green, blue } = state;
  console.log({ red, green, blue });
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
          dispatch({ type: "change_red", payload: COLOR_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_VALUE })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_VALUE })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_VALUE })
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
