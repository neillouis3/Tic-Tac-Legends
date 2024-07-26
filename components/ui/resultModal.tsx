import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface ResultModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  winner: string | null;
}

const ResultModal: React.FC<ResultModalProps> = ({
  isModalVisible,
  toggleModal,
  winner,
}) => {
  return (   
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}
      backdropTransitionOutTiming={0}
      backdropOpacity={0.7}
      backdropColor="#000">
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>
          {winner === 'Draw' ? 'Game is a Draw!' : `${winner} wins!`}
        </Text>
        <Button title="Play Again" onPress={toggleModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 12,
  },
});

export default ResultModal;
