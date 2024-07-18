import React, { useReducer, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const UPDATE_VALUE = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_count":
      return { ...state, counter: state.counter + action.payload };
    case "reduce_count":
      return state.counter - action.payload < 0
        ? state
        : { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreenRed = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({ type: "increase_count", payload: UPDATE_VALUE })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({ type: "reduce_count", payload: UPDATE_VALUE })
        }
      />
      <Text style={styles.textStyle}>Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
  },
});

export default CounterScreenRed;
