import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal, // Import Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface OrderConfirmationModalProps {
  visible: boolean; // Prop to control modal visibility
  onClose: () => void; // Callback to close the modal and trigger navigation
}

// Renamed from OrderConfirmationScreen to OrderConfirmationModal
const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      animationType="fade" // Or "slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} // Handle back button press on Android
    >
      {/* Modal Overlay */}
      <View style={styles.modalOverlay}>
        <View style={styles.modal}>
          {/* Success Icon */}
          <View style={styles.successIcon}>
            <Icon name="check" size={40} color="#FFFFFF" />
          </View>

          {/* Title */}
          <Text style={styles.title}>Order Placed</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>Your food is being prepared.</Text>

          {/* Thanks Button */}
          <TouchableOpacity
            style={styles.thanksButton}
            onPress={onClose} // Call onClose to close modal and trigger navigation in parent
          >
            <Text style={styles.thanksButtonText}>THANKS!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  successIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#10B981',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
  },
  thanksButton: {
    backgroundColor: '#1E40AF',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 25,
  },
  thanksButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default OrderConfirmationModal;
