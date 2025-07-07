import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface OrderHistoryScreenProps {
  navigation: any;
}

const OrderHistoryScreen: React.FC<OrderHistoryScreenProps> = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Ongoing');

  const ongoingOrders = [
    {
      id: 1,
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      status: 'ongoing',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const historyOrders = [
    {
      id: 1,
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '20 Jan, 12:30 • 13 Items',
      status: 'Cancelled',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '20 Jan, 12:30 • 13 Items',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '20 Jan, 12:30 • 13 Items',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1300',
      items: '20 Jan, 12:30 • 13 Items',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const renderOrderItem = (order: any, isOngoing: boolean = false) => (
    <View key={order.id} style={styles.orderItem}>
      <Image source={{uri: order.image}} style={styles.orderImage} />
      <View style={styles.orderInfo}>
        <Text style={styles.restaurantName}>{order.restaurant}</Text>
        <Text style={styles.orderId}>{order.orderId}</Text>
        <Text style={styles.orderPrice}>{order.price}</Text>
        <Text style={styles.orderItems}>{order.items}</Text>
      </View>
      <View style={styles.orderActions}>
        {isOngoing ? (
          <>
            <TouchableOpacity 
              style={styles.trackButton}
              onPress={() => navigation.navigate('OrderDetails')}>
              <Text style={styles.trackButtonText}>Track Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.cancelWarning}>Order cannot be cancelled after 1 minute!</Text>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.rateButton}>
              <Text style={styles.rateButtonText}>Rate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reOrderButton}>
              <Text style={styles.reOrderButtonText}>Re-Order</Text>
            </TouchableOpacity>
            <Text style={[
              styles.orderStatus,
              order.status === 'Cancelled' ? styles.cancelledStatus : styles.completedStatus
            ]}>
              {order.status}
            </Text>
          </>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
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
      </View>

      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>About This Menu</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Ongoing' && styles.activeTab]}
            onPress={() => setActiveTab('Ongoing')}>
            <Text style={[styles.tabText, activeTab === 'Ongoing' && styles.activeTabText]}>
              Ongoing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'History' && styles.activeTab]}
            onPress={() => setActiveTab('History')}>
            <Text style={[styles.tabText, activeTab === 'History' && styles.activeTabText]}>
              History
            </Text>
          </TouchableOpacity>
        </View>

        {/* Orders List */}
        <ScrollView style={styles.ordersList} showsVerticalScrollIndicator={false}>
          {activeTab === 'Ongoing' 
            ? ongoingOrders.map(order => renderOrderItem(order, true))
            : historyOrders.map(order => renderOrderItem(order, false))
          }
        </ScrollView>
      </View>
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
  bar1: {height: 4},
  bar2: {height: 6},
  bar3: {height: 8},
  bar4: {height: 10},
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
  placeholder: {
    width: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#1E40AF',
  },
  tabText: {
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#1E40AF',
    fontWeight: '600',
  },
  ordersList: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  orderItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  orderInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  orderId: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  orderItems: {
    fontSize: 12,
    color: '#6B7280',
  },
  orderActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    minHeight: 80,
  },
  trackButton: {
    backgroundColor: '#1E40AF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 4,
  },
  trackButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 4,
  },
  cancelButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  cancelWarning: {
    fontSize: 10,
    color: '#EF4444',
    textAlign: 'center',
    maxWidth: 120,
  },
  rateButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 4,
  },
  rateButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  reOrderButton: {
    backgroundColor: '#1E40AF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 4,
  },
  reOrderButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  orderStatus: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  cancelledStatus: {
    color: '#EF4444',
  },
  completedStatus: {
    color: '#10B981',
  },
});

export default OrderHistoryScreen;