import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface ComingSoonModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isModalVisible, toggleModal }) => {
  return (
    <Modal 
      isVisible={isModalVisible} 
      onBackdropPress={toggleModal}
      backdropTransitionOutTiming={0}
      backdropOpacity={0.7}
      backdropColor="#000"
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Coming Soon</Text>
        <Button title="Close" onPress={toggleModal} />
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

export default ComingSoonModal;
