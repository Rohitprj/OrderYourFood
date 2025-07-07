import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CartScreenProps {
  navigation: any;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const [chickenQuantity, setChickenQuantity] = useState(1);
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: 'Chicken Butter Masala',
      price: 450,
      image:
        'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
      quantity: chickenQuantity,
      setQuantity: setChickenQuantity,
    },
    {
      id: 2,
      name: 'Pizza Calzone European',
      price: 120,
      image:
        'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      quantity: pizzaQuantity,
      setQuantity: setPizzaQuantity,
    },
  ];

  const coupons = [
    {
      title: 'Save ₹20 with "TRYNEW"',
      status: 'APPLIED',
      color: '#10B981',
    },
    {
      title: 'Save ₹10 with "TRYNEW"',
      status: 'APPLY',
      color: '#1E40AF',
    },
    {
      title: 'Save ₹120 with "TRYNEW"',
      status: 'APPLY',
      color: '#1E40AF',
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal;

  const handlePlaceOrder = () => {
    setShowOrderModal(true);
  };

  const handleProceedToAddress = () => {
    setShowOrderModal(false);
    navigation.navigate('MyAddress');
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
          <Text style={styles.headerTitle}>Cart</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>EDIT</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Cart Items */}
          <View style={styles.cartSection}>
            {cartItems.map(item => (
              <View key={item.id} style={styles.cartItem}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>₹{item.price}</Text>
                  <Text style={styles.itemType}>Half</Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() =>
                      item.setQuantity(Math.max(1, item.quantity - 1))
                    }
                  >
                    <Icon name="remove" size={16} color="#1E40AF" />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => item.setQuantity(item.quantity + 1)}
                  >
                    <Icon name="add" size={16} color="#1E40AF" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Coupons & Offers */}
          <View style={styles.couponsSection}>
            <Text style={styles.sectionTitle}>Coupons & Offers</Text>
            {coupons.map((coupon, index) => (
              <View key={index} style={styles.couponItem}>
                <View style={styles.couponIcon}>
                  <Icon name="local-offer" size={16} color="#1E40AF" />
                </View>
                <Text style={styles.couponText}>{coupon.title}</Text>
                <TouchableOpacity
                  style={[
                    styles.couponButton,
                    coupon.status === 'APPLIED' && styles.appliedButton,
                  ]}
                  onPress={() =>
                    coupon.status === 'APPLY' && setShowSuccessModal(true)
                  }
                >
                  <Text
                    style={[
                      styles.couponButtonText,
                      coupon.status === 'APPLIED' && styles.appliedButtonText,
                    ]}
                  >
                    {coupon.status}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Promo Codes */}
          <View style={styles.promoSection}>
            <Text style={styles.promoTitle}>Promo Codes</Text>
            <TouchableOpacity style={styles.editPromoButton}>
              <Text style={styles.editPromoText}>EDIT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.promoItem}>
            <Text style={styles.promoText}>House No.37, Harkat Nagar</Text>
          </View>
        </ScrollView>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>₹ {total}</Text>
            <Text style={styles.viewBreakdown}>View Breakdown </Text>
          </View>

          <View style={styles.deliveryOptions}>
            <TouchableOpacity style={styles.deliveryOption}>
              <Text style={styles.deliveryOptionText}>HOME DELIVERY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.deliveryOption, styles.pickupOption]}
            >
              <Text
                style={[styles.deliveryOptionText, styles.pickupOptionText]}
              >
                SELF PICKUP
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.selectAddressButton}
            onPress={handlePlaceOrder}
          >
            <Text style={styles.selectAddressButtonText}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.successModal}>
            <View style={styles.successIcon}>
              <Icon name="check" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.successTitle}>"TRYNEW" Applied</Text>
            <Text style={styles.successSubtitle}>You Saved ₹120</Text>
            <TouchableOpacity
              style={styles.successButton}
              onPress={() => setShowSuccessModal(false)}
            >
              <Icon name="check" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Order Confirmation Modal */}
      <Modal
        visible={showOrderModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowOrderModal(false)}
      >
        <View style={styles.orderModalOverlay}>
          <View style={styles.orderModal}>
            {/* Header */}
            <View style={styles.orderModalHeader}>
              <TouchableOpacity
                style={styles.orderModalBackButton}
                onPress={() => setShowOrderModal(false)}
              >
                <Icon name="arrow-back" size={24} color="#374151" />
              </TouchableOpacity>
              <Text style={styles.orderModalTitle}>Cart</Text>
              <TouchableOpacity style={styles.orderModalEditButton}>
                <Text style={styles.orderModalEditText}>EDIT</Text>
              </TouchableOpacity>
            </View>

            {/* Cart Items */}
            <ScrollView style={styles.orderModalContent}>
              {cartItems.map(item => (
                <View key={item.id} style={styles.orderModalItem}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.orderModalItemImage}
                  />
                  <View style={styles.orderModalItemInfo}>
                    <Text style={styles.orderModalItemName}>{item.name}</Text>
                    <Text style={styles.orderModalItemPrice}>
                      ₹{item.price}
                    </Text>
                    <Text style={styles.orderModalItemType}>Half</Text>
                  </View>
                  <View style={styles.orderModalQuantity}>
                    <TouchableOpacity style={styles.orderModalQuantityButton}>
                      <Icon name="remove" size={16} color="#1E40AF" />
                    </TouchableOpacity>
                    <Text style={styles.orderModalQuantityText}>
                      {item.quantity}
                    </Text>
                    <TouchableOpacity style={styles.orderModalQuantityButton}>
                      <Icon name="add" size={16} color="#1E40AF" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}

              {/* Coupons */}
              <View style={styles.orderModalCoupons}>
                <Text style={styles.orderModalCouponsTitle}>
                  Coupons & Offers
                </Text>
                <View style={styles.orderModalCouponItem}>
                  <View style={styles.orderModalCouponIcon}>
                    <Icon name="local-offer" size={16} color="#1E40AF" />
                  </View>
                  <Text style={styles.orderModalCouponText}>
                    Save ₹20 with "TRYNEW"
                  </Text>
                  <View style={styles.orderModalCouponApplied}>
                    <Text style={styles.orderModalCouponAppliedText}>
                      APPLIED
                    </Text>
                  </View>
                </View>
              </View>

              {/* Delivery Address */}
              <View style={styles.orderModalAddress}>
                <View style={styles.orderModalAddressHeader}>
                  <Text style={styles.orderModalAddressTitle}>
                    DELIVERY ADDRESS
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.orderModalAddressEdit}>EDIT</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.orderModalAddressText}>
                  House No.37, Harkat Nagar
                </Text>
              </View>

              {/* Total */}
              <View style={styles.orderModalTotal}>
                <Text style={styles.orderModalTotalAmount}>₹ 450</Text>
                <Text style={styles.orderModalViewBreakdown}>
                  View Breakdown{' '}
                </Text>
              </View>
            </ScrollView>

            {/* Bottom Button */}
            <TouchableOpacity
              style={styles.orderModalButton}
              onPress={handleProceedToAddress}
            >
              <Text style={styles.orderModalButtonText}>PLACE ORDER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    paddingVertical: 16,
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
    fontSize: 18,
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
  cartSection: {
    padding: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  itemType: {
    fontSize: 12,
    color: '#6B7280',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    paddingHorizontal: 4,
  },
  quantityButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    paddingHorizontal: 12,
  },
  couponsSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  couponItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  couponIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#EBF4FF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  couponText: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
  },
  couponButton: {
    backgroundColor: '#1E40AF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  appliedButton: {
    backgroundColor: '#10B981',
  },
  couponButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  appliedButtonText: {
    color: '#FFFFFF',
  },
  promoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  editPromoButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  editPromoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  promoItem: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  promoText: {
    fontSize: 14,
    color: '#6B7280',
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
  totalText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  viewBreakdown: {
    fontSize: 14,
    color: '#1E40AF',
    fontWeight: '500',
  },
  deliveryOptions: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
  },
  deliveryOption: {
    flex: 1,
    backgroundColor: '#1E40AF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  pickupOption: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  deliveryOptionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  pickupOptionText: {
    color: '#6B7280',
  },
  selectAddressButton: {
    backgroundColor: '#1E40AF',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  selectAddressButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  successIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#10B981',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 24,
  },
  successButton: {
    width: 48,
    height: 48,
    backgroundColor: '#1E40AF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Order Modal Styles
  orderModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  orderModal: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
    paddingBottom: 20,
  },
  orderModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  orderModalBackButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderModalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  orderModalEditButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  orderModalEditText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  orderModalContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  orderModalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  orderModalItemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  orderModalItemInfo: {
    flex: 1,
  },
  orderModalItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  orderModalItemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  orderModalItemType: {
    fontSize: 12,
    color: '#6B7280',
  },
  orderModalQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    paddingHorizontal: 4,
  },
  orderModalQuantityButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderModalQuantityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    paddingHorizontal: 12,
  },
  orderModalCoupons: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  orderModalCouponsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  orderModalCouponItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderModalCouponIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#EBF4FF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  orderModalCouponText: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
  },
  orderModalCouponApplied: {
    backgroundColor: '#10B981',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  orderModalCouponAppliedText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  orderModalAddress: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  orderModalAddressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderModalAddressTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    letterSpacing: 0.5,
  },
  orderModalAddressEdit: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  orderModalAddressText: {
    fontSize: 14,
    color: '#1F2937',
  },
  orderModalTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  orderModalTotalAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  orderModalViewBreakdown: {
    fontSize: 14,
    color: '#1E40AF',
    fontWeight: '500',
  },
  orderModalButton: {
    backgroundColor: '#1E40AF',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  orderModalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default CartScreen;
