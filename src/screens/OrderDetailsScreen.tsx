import React from 'react';
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

interface OrderDetailsScreenProps {
  navigation: any;
}

const OrderDetailsScreen: React.FC<OrderDetailsScreenProps> = ({navigation}) => {
  const transactionDetails = [
    {
      label: 'Order ID',
      value: '3435 5678 7865',
    },
    {
      label: 'Apr 10',
      value: '3435 5678 7865',
    },
    {
      label: '',
      value: '3435 5678 7865',
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
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Order Details</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Rider Info */}
          <View style={styles.riderSection}>
            <View style={styles.riderInfo}>
              <Image
                source={{uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'}}
                style={styles.riderImage}
              />
              <View style={styles.riderDetails}>
                <Text style={styles.riderLabel}>Rider Name</Text>
                <Text style={styles.riderPhone}>9777890545</Text>
              </View>
            </View>
            
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.callButtonText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.textButton}>
                <Text style={styles.textButtonText}>Text</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Transaction Details */}
          <View style={styles.transactionSection}>
            <Text style={styles.sectionTitle}>Transaction Details</Text>
            {transactionDetails.map((item, index) => (
              <View key={index} style={styles.transactionItem}>
                <Text style={styles.transactionLabel}>{item.label}</Text>
                <Text style={styles.transactionValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Button */}
        <View style={styles.bottomSection}>
          <TouchableOpacity 
            style={styles.trackButton}
            onPress={() => navigation.navigate('DeliveryTracking')}>
            <Text style={styles.trackButtonText}>TRACK ORDER</Text>
          </TouchableOpacity>
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
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  riderSection: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  riderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  riderImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  riderDetails: {
    flex: 1,
  },
  riderLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  riderPhone: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  callButton: {
    flex: 1,
    backgroundColor: '#1E40AF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  callButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  textButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  transactionSection: {
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  transactionLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  transactionValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  bottomSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  trackButton: {
    backgroundColor: '#1E40AF',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  trackButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default OrderDetailsScreen;