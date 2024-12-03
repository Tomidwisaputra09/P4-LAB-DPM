import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const WinnerMessage = ({ visible, winner, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.winnerText}>🏆 {winner} Wins! 🏆</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  winnerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ff6f61",
  },
  closeButton: {
    backgroundColor: "#61dafb",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
});

export default WinnerMessage;
