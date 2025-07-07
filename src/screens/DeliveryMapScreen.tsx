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

interface DeliveryMapScreenProps {
  navigation: any;
}

const DeliveryMapScreen: React.FC<DeliveryMapScreenProps> = ({navigation}) => {
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
            {/* Location markers */}
            <View style={[styles.locationPin, {top: 40, left: 60}]}>
              <Icon name="location-on" size={16} color="#EF4444" />
            </View>
            <View style={[styles.locationPin, {top: 80, right: 40}]}>
              <Icon name="location-on" size={16} color="#EF4444" />
            </View>
            <View style={[styles.locationPin, {bottom: 100, left: 40}]}>
              <Icon name="location-on" size={16} color="#EF4444" />
            </View>
            <View style={[styles.locationPin, {bottom: 60, right: 60}]}>
              <Icon name="location-on" size={16} color="#EF4444" />
            </View>
            
            {/* Route line */}
            <View style={styles.routeLine} />
            
            {/* Start location */}
            <View style={styles.startLocation}>
              <Icon name="location-on" size={24} color="#FFFFFF" />
            </View>
            
            {/* End location */}
            <View style={styles.endLocation}>
              <Icon name="location-on" size={24} color="#FFFFFF" />
            </View>
            
            {/* Delivery person */}
            <View style={styles.deliveryPerson}>
              <Icon name="delivery-dining" size={20} color="#FFFFFF" />
            </View>
            
            {/* Red Map label */}
            <View style={styles.redMapLabel}>
              <Icon name="location-on" size={16} color="#EF4444" />
              <Text style={styles.redMapText}>Red Map</Text>
            </View>
            
            {/* Latitude label */}
            <View style={styles.latitudeLabel}>
              <Icon name="location-on" size={16} color="#EF4444" />
              <Text style={styles.latitudeText}>Latitude</Text>
            </View>
          </View>

          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>

          {/* Local Map Finder */}
          <View style={styles.mapFinder}>
            <Icon name="location-on" size={16} color="#EF4444" />
            <Text style={styles.mapFinderText}>Local Map Finder</Text>
          </View>
        </View>

        {/* Bottom Order Card */}
        <View style={styles.orderCard}>
          <Image
            source={{uri: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400'}}
            style={styles.orderImage}
          />
          <View style={styles.orderInfo}>
            <Text style={styles.orderName}>Pizza Calzone European</Text>
            <Text style={styles.orderRating}>4.5</Text>
            <Text style={styles.orderPrice}>₹120</Text>
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
    flex: 1,
    position: 'relative',
  },
  mapBackground: {
    flex: 1,
    backgroundColor: '#E8F5E8',
    position: 'relative',
  },
  locationPin: {
    position: 'absolute',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeLine: {
    position: 'absolute',
    top: 120,
    left: 80,
    right: 80,
    height: 4,
    backgroundColor: '#1E40AF',
    borderRadius: 2,
    transform: [{rotate: '25deg'}],
  },
  startLocation: {
    position: 'absolute',
    top: 100,
    left: 70,
    width: 32,
    height: 32,
    backgroundColor: '#1E40AF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endLocation: {
    position: 'absolute',
    bottom: 120,
    right: 70,
    width: 32,
    height: 32,
    backgroundColor: '#EF4444',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryPerson: {
    position: 'absolute',
    top: 160,
    left: '55%',
    width: 32,
    height: 32,
    backgroundColor: '#10B981',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redMapLabel: {
    position: 'absolute',
    bottom: 180,
    left: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  redMapText: {
    fontSize: 12,
    color: '#1F2937',
    marginLeft: 4,
  },
  latitudeLabel: {
    position: 'absolute',
    top: 200,
    right: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  latitudeText: {
    fontSize: 12,
    color: '#1F2937',
    marginLeft: 4,
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
  mapFinder: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mapFinderText: {
    fontSize: 12,
    color: '#1F2937',
    marginLeft: 4,
    fontWeight: '500',
  },
  orderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  orderRating: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E40AF',
  },
});

export default DeliveryMapScreen;