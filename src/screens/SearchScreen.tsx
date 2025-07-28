// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Switch,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Feather';

// const SettingsScreen: React.FC = () => {
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);
//   const [darkModeEnabled, setDarkModeEnabled] = useState(false);
//   const [locationEnabled, setLocationEnabled] = useState(true);

//   const settingsGroups = [
//     {
//       title: 'Preferences',
//       items: [
//         {
//           icon: 'bell',
//           label: 'Push Notifications',
//           type: 'switch',
//           value: notificationsEnabled,
//           onToggle: setNotificationsEnabled,
//           color: '#667eea',
//         },
//         {
//           icon: 'moon',
//           label: 'Dark Mode',
//           type: 'switch',
//           value: darkModeEnabled,
//           onToggle: setDarkModeEnabled,
//           color: '#4facfe',
//         },
//         {
//           icon: 'map-pin',
//           label: 'Location Services',
//           type: 'switch',
//           value: locationEnabled,
//           onToggle: setLocationEnabled,
//           color: '#43e97b',
//         },
//       ],
//     },
//     {
//       title: 'Account',
//       items: [
//         {
//           icon: 'user',
//           label: 'Account Information',
//           type: 'navigation',
//           color: '#f093fb',
//         },
//         {
//           icon: 'shield',
//           label: 'Privacy & Security',
//           type: 'navigation',
//           color: '#f6d365',
//         },
//         {
//           icon: 'credit-card',
//           label: 'Payment Methods',
//           type: 'navigation',
//           color: '#ffeaa7',
//         },
//       ],
//     },
//     {
//       title: 'Support',
//       items: [
//         {
//           icon: 'help-circle',
//           label: 'Help Center',
//           type: 'navigation',
//           color: '#74b9ff',
//         },
//         {
//           icon: 'message-circle',
//           label: 'Contact Support',
//           type: 'navigation',
//           color: '#fd79a8',
//         },
//         {
//           icon: 'star',
//           label: 'Rate App',
//           type: 'navigation',
//           color: '#fdcb6e',
//         },
//       ],
//     },
//     {
//       title: 'Legal',
//       items: [
//         {
//           icon: 'file-text',
//           label: 'Terms of Service',
//           type: 'navigation',
//           color: '#6c5ce7',
//         },
//         {
//           icon: 'lock',
//           label: 'Privacy Policy',
//           type: 'navigation',
//           color: '#a29bfe',
//         },
//       ],
//     },
//   ];

//   const renderSettingItem = (item: any, index: number) => {
//     return (
//       <TouchableOpacity
//         key={index}
//         style={styles.settingItem}
//         disabled={item.type === 'switch'}
//       >
//         <View
//           style={[styles.settingIcon, { backgroundColor: `${item.color}15` }]}
//         >
//           <Icon name={item.icon} size={20} color={item.color} />
//         </View>
//         <Text style={styles.settingLabel}>{item.label}</Text>
//         {item.type === 'switch' ? (
//           <Switch
//             value={item.value}
//             onValueChange={item.onToggle}
//             trackColor={{ false: '#E5E7EB', true: `${item.color}30` }}
//             thumbColor={item.value ? item.color : '#FFFFFF'}
//           />
//         ) : (
//           <Icon name="chevron-right" size={20} color="#9CA3AF" />
//         )}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Settings</Text>
//           <TouchableOpacity style={styles.searchButton}>
//             <Icon name="search" size={24} color="#1F2937" />
//           </TouchableOpacity>
//         </View>

//         {/* Settings Groups */}
//         {settingsGroups.map((group, groupIndex) => (
//           <View key={groupIndex} style={styles.settingsGroup}>
//             <Text style={styles.groupTitle}>{group.title}</Text>
//             <View style={styles.groupContainer}>
//               {group.items.map((item, itemIndex) =>
//                 renderSettingItem(item, itemIndex),
//               )}
//             </View>
//           </View>
//         ))}

//         {/* Danger Zone */}
//         <View style={styles.settingsGroup}>
//           <Text style={styles.groupTitle}>Danger Zone</Text>
//           <View style={styles.groupContainer}>
//             <TouchableOpacity style={styles.settingItem}>
//               <View
//                 style={[styles.settingIcon, { backgroundColor: '#ff6b6b15' }]}
//               >
//                 <Icon name="trash-2" size={20} color="#ff6b6b" />
//               </View>
//               <Text style={[styles.settingLabel, { color: '#ff6b6b' }]}>
//                 Delete Account
//               </Text>
//               <Icon name="chevron-right" size={20} color="#9CA3AF" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* App Info */}
//         <View style={styles.appInfo}>
//           <Text style={styles.appName}>React Native App</Text>
//           <Text style={styles.appVersion}>Version 1.0.0</Text>
//           <Text style={styles.buildNumber}>Build 100</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#1F2937',
//   },
//   searchButton: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   settingsGroup: {
//     marginTop: 24,
//     paddingHorizontal: 20,
//   },
//   groupTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#6B7280',
//     marginBottom: 12,
//     textTransform: 'uppercase',
//     letterSpacing: 0.5,
//   },
//   groupContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   settingItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F3F4F6',
//   },
//   settingIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   settingLabel: {
//     flex: 1,
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#1F2937',
//   },
//   appInfo: {
//     alignItems: 'center',
//     paddingVertical: 32,
//     paddingHorizontal: 20,
//   },
//   appName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#1F2937',
//     marginBottom: 4,
//   },
//   appVersion: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginBottom: 2,
//   },
//   buildNumber: {
//     fontSize: 12,
//     color: '#9CA3AF',
//   },
// });

// export default SettingsScreen;

// import { View, Text } from 'react-native';
// import React from 'react';

// export default function SearchScreen() {
//   return (
//     <View>
//       <Text>SearchScreen</Text>
//     </View>
//   );
// }

import { View, TextInput, StyleSheet, Text } from 'react-native';
import React from 'react';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search here..."
        placeholderTextColor="#999"
      />
      {/* Empty space below */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // for top spacing
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchInput: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#000000',
  },
});
