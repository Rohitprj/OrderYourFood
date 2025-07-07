import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface MyAddressScreenProps {
  navigation: any;
}

const MyAddressScreen: React.FC<MyAddressScreenProps> = ({ navigation }) => {
  const addresses = [
    {
      id: 1,
      type: 'HOME',
      title: 'House No.37, Ghaziabad Road, Nagar, Uttar Nagar, Uttar Pradesh',
      subtitle: 'Nagar, Uttar Nagar - 110059',
      icon: 'home',
      color: '#10B981',
    },
    {
      id: 2,
      type: 'WORK',
      title: 'House No.37, Ghaziabad Road, Nagar, Uttar Nagar, Uttar Pradesh',
      subtitle: 'Nagar, Uttar Nagar - 110059',
      icon: 'work',
      color: '#F59E0B',
    },
    {
      id: 3,
      type: 'WORK',
      title: 'House No.37, Ghaziabad Road, Nagar, Uttar Nagar, Uttar Pradesh',
      subtitle: 'Nagar, Uttar Nagar - 110059',
      icon: 'work',
      color: '#F59E0B',
    },
    {
      id: 4,
      type: 'WORK',
      title: 'House No.37, Ghaziabad Road, Nagar, Uttar Nagar, Uttar Pradesh',
      subtitle: 'Nagar, Uttar Nagar - 110059',
      icon: 'work',
      color: '#F59E0B',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Address</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Address List */}
          <View style={styles.addressList}>
            {addresses.map((address, index) => (
              <TouchableOpacity key={address.id} style={styles.addressItem}>
                <View
                  style={[
                    styles.addressIcon,
                    { backgroundColor: `${address.color}15` },
                  ]}
                >
                  <Icon name={address.icon} size={20} color={address.color} />
                </View>
                <View style={styles.addressInfo}>
                  <View style={styles.addressHeader}>
                    <Text style={styles.addressType}>{address.type}</Text>
                    <View style={styles.addressActions}>
                      <TouchableOpacity style={styles.actionButton}>
                        <Icon name="edit" size={16} color="#F59E0B" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.actionButton}>
                        <Icon name="delete" size={16} color="#EF4444" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.addressTitle}>{address.title}</Text>
                  <Text style={styles.addressSubtitle}>{address.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Button */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.proceedButton}
            onPress={() => navigation.navigate('AddressMapScreen')}
          >
            <Text style={styles.proceedButtonText}>PROCEED</Text>
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
    paddingTop: 8,
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
  },
  addressList: {
    padding: 20,
  },
  addressItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  addressIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  addressInfo: {
    flex: 1,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  addressActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: 14,
    color: '#1F2937',
    lineHeight: 20,
    marginBottom: 4,
  },
  addressSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  bottomSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  proceedButton: {
    backgroundColor: '#1E40AF',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  proceedButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default MyAddressScreen;
