import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Assuming MaterialIcons are used for icons
import Carousel from '../components/Carousel';

interface FoodHomeScreenProps {
  navigation?: any; // Define navigation prop type if using React Navigation
}

const { width } = Dimensions.get('window'); // Get screen width for responsive design

const FoodHomeScreen: React.FC<FoodHomeScreenProps> = ({ navigation }) => {
  // Data for categories, nearby restaurants, and recommendations
  const categories = [
    { name: 'Chicken', icon: '🍕' },
    { name: 'Chicken', icon: '🍕' },
    { name: 'Chicken', icon: '🍕' },
    { name: 'Chicken', icon: '🍕' },
    { name: 'Chicken', icon: '🍕' },
    { name: 'Chicken', icon: '🍕' },
    { name: 'Chicken', icon: '🍕' },
  ];

  const nearbyRestaurants = [
    {
      name: 'Laguna Cafe',
      rating: 4.5,
      price: '₹ 450',
      distance: '0.7 km',
      image:
        'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Limerick Restaurant',
      rating: 4.2,
      price: '₹ 450',
      distance: '0.7 km',
      image:
        'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'The Grand Diner',
      rating: 4.8,
      price: '₹ 500',
      distance: '1.2 km',
      image:
        'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const recommendations = [
    {
      name: 'Limerick Awafi Restaurant',
      rating: 4.5,
      price: '₹ 450',
      distance: '0.7 km',
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      tag: 'Best Deal',
    },
    {
      name: 'Limerick Awafi Restaurant',
      rating: 4.5,
      price: '₹ 480',
      distance: '0.7 km',
      image:
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
      tag: 'Best Deal',
    },
    {
      name: 'Limerick Awafi Restaurant',
      rating: 4.5,
      price: '₹ 450',
      distance: '0.7 km',
      image:
        'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400',
      tag: 'Best Deal',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section with Blue Background */}
      <View style={styles.topSectionBackground}>
        {/* Custom Status Bar - Replicating the design's status bar */}
        <StatusBar barStyle="dark-content" backgroundColor="#4285F4" />
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Icon name="location-on" size={20} color="#FFFFFF" />
            <View>
              <Text style={styles.locationText}>Raju B. A.</Text>
              <Text style={styles.locationAddress}>
                New Palam Vihar Phase 1, Sector 110, Gurugram
              </Text>
            </View>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              style={styles.iconButton}
              //   onPress={() => navigation?.navigate('Filter')} // Placeholder for navigation
            >
              <Icon name="qr-code-scanner" size={24} color="#374151" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
                }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Search Bar and Action Buttons */}
        <View style={styles.searchAndButtonsContainer}>
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color="#9CA3AF" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search your favourite food or restaurants"
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation?.navigate('Filter')}
          >
            <Icon name="filter-list" size={24} color="#374151" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation?.navigate('Cart')}
          >
            <Icon name="shopping-cart" size={24} color="#374151" />
          </TouchableOpacity>
        </View>
        {/* Safe Food Delivery Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerImageContainer}>
            <Text style={styles.bannerEmoji}>🛵</Text>
          </View>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>SAFE FOOD</Text>
            <Text style={styles.bannerTitle}>DELIVERY</Text>
            <Text style={styles.bannerSubtitle}>
              Satisfy Your Cravings In a Tap
            </Text>
          </View>
        </View>
      </View>
      {/* End of Top Section with Blue Background */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Burger Promotion - This section remains outside the blue background */}
        <Carousel />

        {/* Your Favourite Food Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Favourite food</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <View style={styles.categoryIcon}>
                  <Text style={styles.categoryEmoji}>{category.icon}</Text>
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Near you Restaurants */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Near you</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionSubtitle}>
            Discover unique tastes near you
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.restaurantsContainer}
          >
            {nearbyRestaurants.map((restaurant, index) => (
              <TouchableOpacity
                key={index}
                style={styles.restaurantCard}
                onPress={() => navigation?.navigate('RestaurantDetail')} // Placeholder for navigation
              >
                <Image
                  source={{ uri: restaurant.image }}
                  style={styles.restaurantImage}
                />
                <View style={styles.restaurantInfo}>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <View style={styles.restaurantDetails}>
                    <View style={styles.ratingContainer}>
                      <Icon name="star" size={16} color="#FFC107" />
                      <Text style={styles.ratingText}>{restaurant.rating}</Text>
                    </View>
                    <Text style={styles.priceText}>{restaurant.price}</Text>
                  </View>
                  <View style={styles.distanceContainer}>
                    <Icon name="location-on" size={14} color="#6B7280" />
                    <Text style={styles.distanceText}>
                      {restaurant.distance}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recommendations */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommendations</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          {recommendations.map((restaurant, index) => (
            <TouchableOpacity
              key={index}
              style={styles.recommendationCard}
              onPress={() => navigation?.navigate('RestaurantDetail')} // Placeholder for navigation
            >
              <Image
                source={{ uri: restaurant.image }}
                style={styles.recommendationImage}
              />
              <View style={styles.recommendationInfo}>
                <Text style={styles.recommendationName}>{restaurant.name}</Text>
                <View style={styles.recommendationDetails}>
                  <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#FFC107" />
                    <Text style={styles.ratingText}>{restaurant.rating}</Text>
                  </View>
                  <Text style={styles.priceText}>{restaurant.price}</Text>
                </View>
                <View style={styles.distanceContainer}>
                  <Icon name="location-on" size={14} color="#6B7280" />
                  <Text style={styles.distanceText}>{restaurant.distance}</Text>
                </View>
              </View>
              {restaurant.tag && (
                <View style={styles.recommendationTag}>
                  <Text style={styles.recommendationTagText}>
                    {restaurant.tag}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Light gray background for the overall screen
  },
  topSectionBackground: {
    backgroundColor: '#73BEFF', // Blue background for the top section
    paddingHorizontal: 20,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF', // White text for status bar
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
    borderColor: '#FFFFFF',
    borderRadius: 2,
    padding: 1,
  },
  batteryLevel: {
    flex: 1,
    borderRadius: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1, // Allow text to take available space
  },
  locationLabel: {
    fontSize: 12,
    color: '#E0E7FF', // Lighter blue for label
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF', // White text
  },
  locationAddress: {
    fontSize: 12,
    color: '#E0E7FF', // Lighter blue for address
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  searchAndButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10, // Space between search bar and buttons
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background for search input
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 2,
    flex: 1, // Allow search input to take available space
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  actionButton: {
    width: 48, // Larger button size
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 12, // Rounded corners
    shadowColor: '#000', // Add shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  bannerContent: {
    // flex: 1,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'right',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#E0E7FF',
    marginTop: 4,
  },
  deliveryImage: {
    width: 120, // Adjusted size for better visibility
    height: 120,
    resizeMode: 'contain',
    // Position as per the image
  },
  promoContainer: {
    position: 'relative',
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 20, // Pull it up to overlap with the blue section
    marginHorizontal: 20, // Align with content below
  },
  promoImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  promoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(139, 69, 19, 0.8)', // Darker brown overlay
    padding: 20,
    justifyContent: 'center',
  },
  promoText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  promoDiscount: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#DC2626', // Red-600
  },
  discountLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#DC2626', // Red-600
  },
  content: {
    flex: 1,
    // No horizontal padding here, as it's now applied to the topSectionBackground
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 20, // Add padding to sections below the blue background
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937', // Gray-800
  },
  seeAllText: {
    fontSize: 14,
    color: '#1E40AF', // Blue-700
    fontWeight: '500',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280', // Gray-500
    marginBottom: 16,
  },
  categoriesContainer: {
    marginTop: 16,
    // backgroundColor: 'red',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#fff', // Yellow-100
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937', // Gray-800
  },
  restaurantsContainer: {
    marginTop: 16,
  },
  restaurantCard: {
    width: width * 0.4, // Approximately 40% of screen width
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'cover',
  },
  restaurantInfo: {
    padding: 12,
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  restaurantDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#6B7280',
  },
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E40AF',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  distanceText: {
    fontSize: 12,
    color: '#6B7280',
  },
  recommendationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden', // Ensure tag doesn't overflow
  },
  recommendationImage: {
    width: 80,
    height: 100,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    resizeMode: 'cover',
  },
  recommendationInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  recommendationName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  recommendationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  recommendationTag: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#7065F0', // Amber-500 for tags
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 12,
  },
  recommendationTagText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB', // Gray-200
    justifyContent: 'space-around', // Distribute items evenly
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navText: {
    fontSize: 12,
    color: '#9CA3AF', // Gray-400
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    color: '#1E40AF', // Blue-700
    fontWeight: '600',
    marginTop: 4,
  },
  bannerImageContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerEmoji: {
    fontSize: 40,
  },
});

export default FoodHomeScreen;
