import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface AddressMapScreenProps {
  navigation: any;
}

const AddressMapScreen: React.FC<AddressMapScreenProps> = ({ navigation }) => {
  const [selectedLabel, setSelectedLabel] = useState('HOME');
  const [address, setAddress] = useState(
    'House No.37, Ghaziabad Road, Harkat Village, Uttar Nagar - 110059',
  );
  const [email, setEmail] = useState('Harkat Village');
  const [postCode, setPostCode] = useState('34567');
  const [apartment, setApartment] = useState('');

  const labels = ['HOME', 'WORK', 'OTHER'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.content}>
        {/* Map Section */}
        <View style={styles.mapContainer}>
          {/* Map Background */}
          <View style={styles.mapBackground}>
            {/* Map pins and locations */}
            <View style={[styles.mapPin, { top: 40, left: 60 }]}>
              <Icon name="location-on" size={16} color="#EF4444" />
            </View>
            <View style={[styles.mapPin, { top: 80, right: 40 }]}>
              <Icon name="location-on" size={16} color="#EF4444" />
            </View>
            <View style={[styles.mapPin, { bottom: 60, left: 40 }]}>
              <Icon name="location-on" size={16} color="#EF4444" />
            </View>
            <View style={[styles.mapPin, { bottom: 40, right: 60 }]}>
              <Icon name="location-on" size={16} color="#EF4444" />
            </View>

            {/* Central location marker */}
            <View style={styles.centralMarker}>
              <View style={styles.markerContainer}>
                <Icon name="location-on" size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.markerText}>House No.37, Ghaziabad Road</Text>
            </View>
          </View>

          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Address Form */}
        <View style={styles.formContainer}>
          {/* Address Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>ADDRESS</Text>
            <View style={styles.addressInputContainer}>
              <Icon name="location-on" size={20} color="#6B7280" />
              <TextInput
                style={styles.addressInput}
                value={address}
                onChangeText={setAddress}
                multiline
              />
            </View>
          </View>

          {/* Email and Post Code Row */}
          <View style={styles.rowContainer}>
            <View style={styles.halfField}>
              <Text style={styles.label}>EMAIL</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.halfField}>
              <Text style={styles.label}>POST CODE</Text>
              <TextInput
                style={styles.input}
                value={postCode}
                onChangeText={setPostCode}
              />
            </View>
          </View>

          {/* Apartment Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>APARTMENT</Text>
            <TextInput
              style={styles.input}
              value={apartment}
              onChangeText={setApartment}
              placeholder=""
            />
          </View>

          {/* Label Selection */}
          <View style={styles.labelContainer}>
            <Text style={styles.label}>LABEL AS</Text>
            <View style={styles.labelButtons}>
              {labels.map(label => (
                <TouchableOpacity
                  key={label}
                  style={[
                    styles.labelButton,
                    selectedLabel === label && styles.selectedLabelButton,
                  ]}
                  onPress={() => setSelectedLabel(label)}
                >
                  <Text
                    style={[
                      styles.labelButtonText,
                      selectedLabel === label && styles.selectedLabelButtonText,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => navigation.navigate('PlaceOrderCart')}
          >
            <Text style={styles.saveButtonText}>SAVE</Text>
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
    // marginTop: 20,
  },
  mapContainer: {
    height: 200,
    position: 'relative',
  },
  mapBackground: {
    flex: 1,
    backgroundColor: '#E8F5E8',
    position: 'relative',
  },
  mapPin: {
    position: 'absolute',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centralMarker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -75 }, { translateY: -40 }],
    alignItems: 'center',
  },
  markerContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#1E40AF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  markerText: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    textAlign: 'center',
    maxWidth: 150,
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  addressInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 8,
  },
  addressInput: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
    textAlignVertical: 'top',
    minHeight: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  halfField: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1F2937',
  },
  labelContainer: {
    marginBottom: 32,
  },
  labelButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  labelButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  selectedLabelButton: {
    backgroundColor: '#1E40AF',
    borderColor: '#1E40AF',
  },
  labelButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  selectedLabelButtonText: {
    color: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#1E40AF',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default AddressMapScreen;
