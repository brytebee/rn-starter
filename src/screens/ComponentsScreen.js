import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = ["Bright"];
  return (
    <View>
      <Text style={styles.bigText}>Getting started with React Native</Text>
      <Text style={styles.nameText}>{greeting.join(" ")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 45,
  },
  nameText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
