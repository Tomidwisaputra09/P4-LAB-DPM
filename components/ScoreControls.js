import React from "react";
import { View, Button, StyleSheet } from "react-native";

const ScoreControls = ({ incrementScore, decrementScore }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button title="+ Team A" onPress={() => incrementScore("A")} />
        <Button title="- Team A" onPress={() => decrementScore("A")} />
      </View>
      <View style={styles.buttonGroup}>
        <Button title="+ Team B" onPress={() => incrementScore("B")} />
        <Button title="- Team B" onPress={() => decrementScore("B")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default ScoreControls;
