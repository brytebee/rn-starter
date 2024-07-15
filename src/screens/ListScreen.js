import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 23 },
    { name: "Friend #3", age: 21 },
    { name: "Friend #4", age: 24 },
    { name: "Friend #5", age: 20 },
    { name: "Friend #6", age: 22 },
    { name: "Friend #7", age: 19 },
    { name: "Friend #8", age: 20 },
    { name: "Friend #9", age: 21 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friends) => friends.name}
        data={friends}
        renderItem={({ item }) => (
          <Text style={styles.listStyle}>
            {item.name} - Age: {item.age}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
