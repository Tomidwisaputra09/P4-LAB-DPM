import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MatchInfo = ({ teamA, teamB, scoreA, scoreB }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.team}>
        {teamA}: {scoreA}
      </Text>
      <Text style={styles.team}>
        {teamB}: {scoreB}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  team: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
});

export default MatchInfo;
