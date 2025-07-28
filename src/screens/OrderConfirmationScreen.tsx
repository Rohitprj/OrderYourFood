// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   SafeAreaView,
//   Modal,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// interface OrderConfirmationScreenProps {
//   navigation: any;
// }

// const OrderConfirmationScreen: React.FC<OrderConfirmationScreenProps> = ({
//   navigation,
// }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       {/* Status Bar */}
//       <View style={styles.statusBar}>
//         <Text style={styles.time}>9:41</Text>
//         <View style={styles.statusIcons}>
//           <View style={styles.signalBars}>
//             <View style={[styles.bar, styles.bar1]} />
//             <View style={[styles.bar, styles.bar2]} />
//             <View style={[styles.bar, styles.bar3]} />
//             <View style={[styles.bar, styles.bar4]} />
//           </View>
//           <Icon name="wifi" size={16} color="#000" />
//           <View style={styles.battery}>
//             <View style={styles.batteryLevel} />
//           </View>
//         </View>
//       </View>

//       {/* Modal Overlay */}
//       <View style={styles.modalOverlay}>
//         <View style={styles.modal}>
//           {/* Success Icon */}
//           <View style={styles.successIcon}>
//             <Icon name="check" size={40} color="#FFFFFF" />
//           </View>

//           {/* Title */}
//           <Text style={styles.title}>Order Placed</Text>

//           {/* Subtitle */}
//           <Text style={styles.subtitle}>Your food is being prepared.</Text>

//           {/* Thanks Button */}
//           <TouchableOpacity
//             style={styles.thanksButton}
//             onPress={() => navigation.navigate('OrderDetails')}
//           >
//             <Text style={styles.thanksButtonText}>THANKS!</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   statusBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 8,
//     paddingBottom: 8,
//   },
//   time: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   statusIcons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//   },
//   signalBars: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     gap: 2,
//   },
//   bar: {
//     width: 3,
//     backgroundColor: '#000000',
//     borderRadius: 1,
//   },
//   bar1: { height: 4 },
//   bar2: { height: 6 },
//   bar3: { height: 8 },
//   bar4: { height: 10 },
//   battery: {
//     width: 24,
//     height: 12,
//     borderWidth: 1,
//     borderColor: '#000000',
//     borderRadius: 2,
//     padding: 1,
//   },
//   batteryLevel: {
//     flex: 1,
//     backgroundColor: '#000000',
//     borderRadius: 1,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 40,
//   },
//   modal: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 32,
//     alignItems: 'center',
//     width: '100%',
//     maxWidth: 300,
//   },
//   successIcon: {
//     width: 80,
//     height: 80,
//     backgroundColor: '#10B981',
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#6B7280',
//     textAlign: 'center',
//     marginBottom: 32,
//   },
//   thanksButton: {
//     backgroundColor: '#1E40AF',
//     paddingHorizontal: 32,
//     paddingVertical: 12,
//     borderRadius: 25,
//   },
//   thanksButtonText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
// });

// export default OrderConfirmationScreen;

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
