import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import WinnerMessage from "./components/WinnerMessage";

const App = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const incrementScore = (team) => {
    if (team === "A" && teamAScore < 10) setTeamAScore(teamAScore + 1);
    if (team === "B" && teamBScore < 10) setTeamBScore(teamBScore + 1);
  };

  const decrementScore = (team) => {
    if (team === "A" && teamAScore > 0) setTeamAScore(teamAScore - 1);
    if (team === "B" && teamBScore > 0) setTeamBScore(teamBScore - 1);
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setWinner(null);
  };

  const checkWinner = () => {
    if (teamAScore === 10) setWinner("Team A");
    if (teamBScore === 10) setWinner("Team B");
  };

  React.useEffect(() => {
    checkWinner();
  }, [teamAScore, teamBScore]);

  return (
    <ImageBackground source={require("./assets/fotobg2.jpg")} style={styles.container} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>Futsal Scoreboard Pro</Text>

        <View style={styles.scoreBoard}>
          <ImageBackground source={require("./assets/fotobg2.jpg")} style={styles.teamContainer} resizeMode="cover">
            <Text style={styles.teamName}>Team A</Text>
            <Text style={styles.score}>{teamAScore}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => incrementScore("A")}>
                <Text style={styles.buttonText}>+1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => decrementScore("A")}>
                <Text style={styles.buttonText}>-1</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={styles.divider}></View>

          <ImageBackground source={require("./assets/fotobg2.jpg")} style={styles.teamContainer} resizeMode="cover">
            <Text style={styles.teamName}>Team B</Text>
            <Text style={[styles.score, styles.teamBScore]}>{teamBScore}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={() => incrementScore("B")}>
                <Text style={styles.buttonText}>+1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => decrementScore("B")}>
                <Text style={styles.buttonText}>-1</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
          <Text style={styles.resetButtonText}>Reset Scores</Text>
        </TouchableOpacity>

        <WinnerMessage visible={!!winner} winner={winner} onClose={() => setWinner(null)} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay untuk latar belakang
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 30,
  },
  scoreBoard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    padding: 10,
    width: "90%",
    justifyContent: "space-between",
  },
  teamContainer: {
    alignItems: "center",
    flex: 1,
    padding: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  score: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#ff6f61",
  },
  teamBScore: {
    color: "#28a745",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#ff6f61",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: "#61dafb",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default App;
