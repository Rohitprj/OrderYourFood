import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Platform, // For platform-specific styling like shadows
} from 'react-native';

interface AboutThisMenuProps {
  navigation: any;
}

const AboutThisMenu: React.FC<AboutThisMenuProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('ongoing');
  // Sample data for Ongoing orders
  const ongoingOrders = [
    {
      id: '1',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
      cancellable: true,
    },
    {
      id: '2',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
      cancellable: true,
    },
    {
      id: '3',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
      cancellable: true,
    },
    {
      id: '4',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
      cancellable: true,
    },
    {
      id: '5',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
      cancellable: true,
    },
    {
      id: '6',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      items: '03 Items',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
      cancellable: true,
    },
  ];

  // Sample data for History orders
  const historyOrders = [
    {
      id: '1',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      date: '29 JAN, 12:30',
      items: '03 Items',
      status: 'Completed',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
    },
    {
      id: '2',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      date: '29 JAN, 12:30',
      items: '03 Items',
      status: 'Cancelled',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
    },
    {
      id: '3',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      date: '29 JAN, 12:30',
      items: '03 Items',
      status: 'Completed',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
    },
    {
      id: '4',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      date: '29 JAN, 12:30',
      items: '03 Items',
      status: 'Cancelled',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
    },
    {
      id: '5',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      date: '29 JAN, 12:30',
      items: '03 Items',
      status: 'Completed',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
    },
    {
      id: '6',
      restaurant: 'Lagoon Cafe',
      orderId: '#162432',
      price: '₹1200',
      date: '29 JAN, 12:30',
      items: '03 Items',
      status: 'Cancelled',
      image: 'https://placehold.co/60x60/dcdcdc/FFFFFF?text=Cafe',
    },
  ];

  const renderOngoingOrder = order => (
    <View key={order.id} style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Image source={{ uri: order.image }} style={styles.restaurantImage} />
        <View style={styles.orderInfo}>
          <Text style={styles.restaurantName}>{order.restaurant}</Text>
          <Text style={styles.orderPrice}>
            {order.price} • {order.items}
          </Text>
        </View>
        <Text style={styles.orderId}>{order.orderId}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={{ ...styles.buttonText, color: 'white' }}>
            Track Order
          </Text>
        </TouchableOpacity>
        {order.cancellable && (
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={{ ...styles.cancelButtonText, color: '#014076' }}>
              Cancel
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {order.cancellable && (
        <Text style={styles.cancelMessage}>
          Order cannot be cancelled after 1 minute*
        </Text>
      )}
    </View>
  );

  const renderHistoryOrder = order => (
    <View key={order.id} style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Image source={{ uri: order.image }} style={styles.restaurantImage} />
        <View style={styles.orderInfo}>
          <Text style={styles.restaurantName}>{order.restaurant}</Text>
          <Text style={styles.orderPrice}>
            {order.price}, {order.date} • {order.items}
          </Text>
        </View>
        <View style={styles.orderIdContainer}>
          <Text style={styles.orderId}>{order.orderId}</Text>
          <Text
            style={[
              styles.orderStatus,
              order.status === 'Completed'
                ? styles.statusCompleted
                : styles.statusCancelled,
            ]}
          >
            {order.status}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.rateButton}>
          <Text style={styles.buttonText}>Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reorderButton}>
          <Text style={{ ...styles.buttonText, color: '#fff' }}>Re-Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          //   onPress={() => () => navigation.navigate('ChatScreen')}
        >
          {/* Using a simple text for back arrow, ideally an icon */}
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About This Menu</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'ongoing' && styles.activeTabBorder,
          ]}
          onPress={() => setActiveTab('ongoing')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'ongoing' && styles.activeTabText,
            ]}
          >
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'history' && styles.activeTabBorder,
          ]}
          onPress={() => setActiveTab('history')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'history' && styles.activeTabText,
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content based on active tab */}
      <ScrollView style={styles.content}>
        {activeTab === 'ongoing'
          ? ongoingOrders.map(renderOngoingOrder)
          : historyOrders.map(renderHistoryOrder)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7', // Light grey background matching the design
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth, // Thin line
    borderBottomColor: '#e0e0e0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  backButton: {
    marginRight: 10,
    padding: 5, // Make touchable area larger
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
    fontWeight: '300', // Lighter weight for the '<'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600', // Semi-bold
    color: '#333',
    flex: 1, // To push the title to center more
    textAlign: 'center', // Center the title
    marginLeft: -40, // Adjust to visually center due to back button
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingTop: 10,
    borderBottomWidth: 1, // Only bottom border
    borderBottomColor: '#e0e0e0',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10, // Space for the active tab indicator
  },
  activeTabBorder: {
    borderBottomWidth: 2, // Blue line for active tab
    borderBottomColor: '#007AFF', // iOS blue
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888', // Lighter grey for inactive
  },
  activeTabText: {
    color: '#007AFF', // Blue for active tab text
    fontWeight: '600', // Slightly bolder for active
  },
  content: {
    flex: 1,
    padding: 16,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  orderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12, // Slightly more space
    backgroundColor: '#dcdcdc', // Background for placeholder image
  },
  orderInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderPrice: {
    fontSize: 14,
    color: '#666', // Slightly darker grey
    marginTop: 2,
  },
  orderIdContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center', // Vertically center content
  },
  orderId: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  orderStatus: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  statusCompleted: {
    color: '#28A745', // Green
  },
  statusCancelled: {
    color: '#DC3545', // Red
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8, // Less margin
  },
  trackButton: {
    backgroundColor: '#014076', // iOS Blue
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#fff', // White background
    borderWidth: 1,
    borderColor: '#014076', // Red border
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  rateButton: {
    backgroundColor: '#fff', // White background
    borderWidth: 1,
    borderColor: '#014076', // Grey border
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 8,
    marginRight: 10,
  },
  reorderButton: {
    backgroundColor: '#014076', // Green
    paddingVertical: 8,
    paddingHorizontal: 38,
    borderRadius: 8,
  },
  buttonText: {
    color: '#1F2937',
    fontSize: 14,
    fontWeight: '600', // Semi-bold
  },
  cancelButtonText: {
    color: '#DC3545', // Red text
    fontSize: 14,
    fontWeight: '600',
  },
  cancelMessage: {
    fontSize: 12,
    color: '#DC3545',
    marginTop: 10,
    textAlign: 'right',
    fontStyle: 'italic', // Italicize as in design
  },
});

export default AboutThisMenu;
