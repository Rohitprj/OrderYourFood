import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Modal, // Import Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OrderConfirmationModal from './OrderConfirmationScreen'; // Import the new modal component

interface PaymentMethodsScreenProps {
  navigation: any;
}

const PaymentMethodsScreen: React.FC<PaymentMethodsScreenProps> = ({
  navigation,
}) => {
  const [selectedPayment, setSelectedPayment] = useState('');
  // State to control the visibility of the order confirmation modal
  const [showOrderConfirmationModal, setShowOrderConfirmationModal] =
    useState(false);

  const paymentMethods = [
    {
      id: 'paytm',
      title: 'Paytm UPI',
      icon: 'account-balance-wallet',
      color: '#00BAF2',
    },
    {
      id: 'paytm2',
      title: 'Paytm UPI',
      icon: 'account-balance-wallet',
      color: '#00BAF2',
    },
    {
      id: 'gpay',
      title: 'Gpay UPI',
      icon: 'payment',
      color: '#4285F4',
    },
  ];

  const otherMethods = [
    {
      id: 'debit',
      title: 'Debit Card',
      icon: 'credit-card',
      color: '#6B7280',
    },
    {
      id: 'credit',
      title: 'Credit Card',
      icon: 'credit-card',
      color: '#6B7280',
    },
  ];

  const codMethods = [
    {
      id: 'sbi',
      title: 'SBI',
      icon: 'account-balance',
      color: '#1E40AF',
    },
    {
      id: 'netbanking',
      title: 'Netbanking',
      icon: 'computer',
      color: '#6B7280',
    },
  ];

  const deliveryMethods = [
    {
      id: 'cod',
      title: 'Cash on Delivery',
      icon: 'local-shipping',
      color: '#10B981',
    },
  ];

  // Handler for when the "Place Order" button is pressed
  const handlePlaceOrder = () => {
    // Show the order confirmation modal
    setShowOrderConfirmationModal(true);
  };

  // Handler for when the "THANKS!" button inside the modal is pressed
  const handleOrderConfirmationClose = () => {
    setShowOrderConfirmationModal(false); // Close the modal
    navigation.navigate('OrderDetails'); // Navigate to OrderDetails screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Status Bar */}
      {/* <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBars}>
            <View style={[styles.bar, styles.bar1]} />
            <View style={[styles.bar, styles.bar2]} />
            <View style={[styles.bar, styles.bar3]} />
            <View style={[styles.bar, styles.bar4]} />
          </View>
          <Icon name="wifi" size={16} color="#000" />
          <View style={styles.battery}>
            <View style={styles.batteryLevel} />
          </View>
        </View>
      </View> */}

      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bill Total: ₹434.75</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>EDIT</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* UPI Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>UPI</Text>
            {paymentMethods.map(method => (
              <TouchableOpacity
                key={method.id}
                style={styles.paymentItem}
                onPress={() => setSelectedPayment(method.id)}
              >
                <View style={styles.paymentLeft}>
                  <View
                    style={[
                      styles.paymentIcon,
                      { backgroundColor: `${method.color}15` },
                    ]}
                  >
                    <Icon name={method.icon} size={20} color={method.color} />
                  </View>
                  <Text style={styles.paymentTitle}>{method.title}</Text>
                </View>
                <View style={styles.radioContainer}>
                  <View
                    style={[
                      styles.radioButton,
                      selectedPayment === method.id &&
                        styles.radioButtonSelected,
                    ]}
                  >
                    {selectedPayment === method.id && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <Icon name="chevron-right" size={20} color="#9CA3AF" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* UPI Section (Second Group) */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>UPI</Text>
            {otherMethods.map(method => (
              <TouchableOpacity
                key={method.id}
                style={styles.paymentItem}
                onPress={() => setSelectedPayment(method.id)}
              >
                <View style={styles.paymentLeft}>
                  <View
                    style={[
                      styles.paymentIcon,
                      { backgroundColor: `${method.color}15` },
                    ]}
                  >
                    <Icon name={method.icon} size={20} color={method.color} />
                  </View>
                  <Text style={styles.paymentTitle}>{method.title}</Text>
                </View>
                <View style={styles.radioContainer}>
                  <View
                    style={[
                      styles.radioButton,
                      selectedPayment === method.id &&
                        styles.radioButtonSelected,
                    ]}
                  >
                    {selectedPayment === method.id && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <Icon name="chevron-right" size={20} color="#9CA3AF" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* NETBANKING Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>NETBANKING</Text>
            {codMethods.map(method => (
              <TouchableOpacity
                key={method.id}
                style={styles.paymentItem}
                onPress={() => setSelectedPayment(method.id)}
              >
                <View style={styles.paymentLeft}>
                  <View
                    style={[
                      styles.paymentIcon,
                      { backgroundColor: `${method.color}15` },
                    ]}
                  >
                    <Icon name={method.icon} size={20} color={method.color} />
                  </View>
                  <Text style={styles.paymentTitle}>{method.title}</Text>
                </View>
                <View style={styles.radioContainer}>
                  <View
                    style={[
                      styles.radioButton,
                      selectedPayment === method.id &&
                        styles.radioButtonSelected,
                    ]}
                  >
                    {selectedPayment === method.id && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <Icon name="chevron-right" size={20} color="#9CA3AF" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* COD Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>COD</Text>
            {deliveryMethods.map(method => (
              <TouchableOpacity
                key={method.id}
                style={styles.paymentItem}
                onPress={() => setSelectedPayment(method.id)}
              >
                <View style={styles.paymentLeft}>
                  <View
                    style={[
                      styles.paymentIcon,
                      { backgroundColor: `${method.color}15` },
                    ]}
                  >
                    <Icon name={method.icon} size={20} color={method.color} />
                  </View>
                  <Text style={styles.paymentTitle}>{method.title}</Text>
                </View>
                <View style={styles.radioContainer}>
                  <View
                    style={[
                      styles.radioButton,
                      selectedPayment === method.id &&
                        styles.radioButtonSelected,
                    ]}
                  >
                    {selectedPayment === method.id && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <Icon name="chevron-right" size={20} color="#9CA3AF" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Paytm UPI</Text>
            <Text style={styles.totalAmount}>₹434.75</Text>
          </View>
          <TouchableOpacity
            style={styles.placeOrderButton}
            onPress={handlePlaceOrder}
          >
            {' '}
            {/* Call the new handler */}
            <Text style={styles.placeOrderButtonText}>Place Order</Text>
            <Icon name="chevron-right" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        visible={showOrderConfirmationModal}
        onClose={handleOrderConfirmationClose}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 8,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    width: 3,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  bar1: { height: 4 },
  bar2: { height: 6 },
  bar3: { height: 8 },
  bar4: { height: 10 },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
    padding: 1,
  },
  batteryLevel: {
    flex: 1,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 36,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  scrollContent: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  paymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paymentTitle: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#1E40AF',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1E40AF',
  },
  bottomSection: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    padding: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  placeOrderButton: {
    backgroundColor: '#1E40AF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 25,
    gap: 8,
  },
  placeOrderButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default PaymentMethodsScreen;
