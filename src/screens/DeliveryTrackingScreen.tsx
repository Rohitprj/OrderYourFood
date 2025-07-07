import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface DeliveryTrackingScreenProps {
  navigation: any;
}

const DeliveryTrackingScreen: React.FC<DeliveryTrackingScreenProps> = ({navigation}) => {
  const orderSteps = [
    {
      title: 'Your order has been received',
      completed: true,
    },
    {
      title: 'The restaurant is preparing your meal',
      completed: true,
    },
    {
      title: 'Your order has been picked up for delivery',
      completed: false,
    },
    {
      title: 'Order arriving soon!',
      completed: false,
    },
  ];

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
        {/* Map Section */}
        <View style={styles.mapContainer}>
          {/* Map Background */}
          <View style={styles.mapBackground}>
            {/* Route line */}
            <View style={styles.routeLine} />
            
            {/* Location markers */}
            <View style={[styles.locationMarker, styles.startMarker]}>
              <Icon name="location-on" size={20} color="#FFFFFF" />
            </View>
            <View style={[styles.locationMarker, styles.endMarker]}>
              <Icon name="location-on" size={20} color="#FFFFFF" />
            </View>
            
            {/* Delivery person marker */}
            <View style={styles.deliveryMarker}>
              <Icon name="delivery-dining" size={24} color="#FFFFFF" />
            </View>
          </View>

          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>

          {/* Info Button */}
          <TouchableOpacity style={styles.infoButton}>
            <Icon name="info" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Order Info Card */}
        <View style={styles.orderCard}>
          <View style={styles.orderHeader}>
            <Text style={styles.orderStatus}>Order cannot be cancelled after 1 minute!</Text>
          </View>
          
          <View style={styles.orderDetails}>
            <Image
              source={{uri: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400'}}
              style={styles.orderImage}
            />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>Pizza Calzone European</Text>
              <Text style={styles.orderTime}>20 min</Text>
            </View>
            <View style={styles.orderActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Icon name="refresh" size={20} color="#1E40AF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Progress Steps */}
          <View style={styles.progressContainer}>
            {orderSteps.map((step, index) => (
              <View key={index} style={styles.progressStep}>
                <View style={[
                  styles.progressDot,
                  step.completed && styles.progressDotCompleted
                ]}>
                  {step.completed && <Icon name="check" size={12} color="#FFFFFF" />}
                </View>
                <Text style={[
                  styles.progressText,
                  step.completed && styles.progressTextCompleted
                ]}>
                  {step.title}
                </Text>
              </View>
            ))}
          </View>

          {/* Rider Info */}
          <View style={styles.riderInfo}>
            <Image
              source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'}}
              style={styles.riderImage}
            />
            <View style={styles.riderDetails}>
              <Text style={styles.riderName}>Robert F.</Text>
              <Text style={styles.riderRole}>Courier</Text>
            </View>
            <View style={styles.riderActions}>
              <TouchableOpacity style={styles.riderActionButton}>
                <Icon name="phone" size={20} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.riderActionButton}
                onPress={() => navigation.navigate('ChatScreen')}>
                <Icon name="message" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  mapContainer: {
    height: 300,
    position: 'relative',
  },
  mapBackground: {
    flex: 1,
    backgroundColor: '#E8F5E8',
    position: 'relative',
  },
  routeLine: {
    position: 'absolute',
    top: 80,
    left: 60,
    right: 60,
    height: 4,
    backgroundColor: '#1E40AF',
    borderRadius: 2,
    transform: [{rotate: '15deg'}],
  },
  locationMarker: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startMarker: {
    backgroundColor: '#1E40AF',
    top: 70,
    left: 50,
  },
  endMarker: {
    backgroundColor: '#EF4444',
    bottom: 80,
    right: 50,
  },
  deliveryMarker: {
    position: 'absolute',
    top: 120,
    left: '60%',
    width: 40,
    height: 40,
    backgroundColor: '#10B981',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    backgroundColor: '#1E40AF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  orderHeader: {
    marginBottom: 20,
  },
  orderStatus: {
    fontSize: 12,
    color: '#EF4444',
    textAlign: 'center',
  },
  orderDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
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
  orderName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  orderTime: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  orderActions: {
    alignItems: 'center',
  },
  actionButton: {
    width: 40,
    height: 40,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressDotCompleted: {
    backgroundColor: '#10B981',
  },
  progressText: {
    fontSize: 14,
    color: '#9CA3AF',
    flex: 1,
  },
  progressTextCompleted: {
    color: '#1F2937',
    fontWeight: '500',
  },
  riderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
  },
  riderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  riderDetails: {
    flex: 1,
  },
  riderName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  riderRole: {
    fontSize: 12,
    color: '#6B7280',
  },
  riderActions: {
    flexDirection: 'row',
    gap: 8,
  },
  riderActionButton: {
    width: 36,
    height: 36,
    backgroundColor: '#1E40AF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DeliveryTrackingScreen;