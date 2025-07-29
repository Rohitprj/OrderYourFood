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

interface RestaurantDetailScreenProps {
  navigation: any;
}

const RestaurantDetailScreen: React.FC<RestaurantDetailScreenProps> = ({
  navigation,
}) => {
  const menuItems = [
    {
      name: 'Chicken Shawarma',
      rating: 4.5,
      price: '₹ 480',
      originalPrice: '₹ 500',
      image:
        'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Best Seller',
    },
    {
      name: 'Chicken Butter Masala',
      rating: 4.5,
      price: '₹ 480',
      originalPrice: '₹ 500',
      image:
        'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chicken Kabab',
      rating: 4.5,
      price: '₹ 480',
      originalPrice: '₹ 500',
      image:
        'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chicken Changezi',
      rating: 4.5,
      price: '₹ 480',
      originalPrice: '₹ 500',
      image:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chicken Biryani',
      rating: 4.5,
      price: '₹ 480',
      originalPrice: '₹ 500',
      image:
        'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const categories = ['Best Seller', 'Chicken', 'Rice', 'Breads', 'Beverage'];

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
          <Text style={styles.headerTitle}>About This Restaurant</Text>
          <TouchableOpacity style={styles.shareButton}>
            <Icon name="share" size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Restaurant Info */}
          <View style={styles.restaurantInfo}>
            <View style={styles.restaurantHeader}>
              <View>
                <Text style={styles.restaurantName}>Lagoon Cafe</Text>
                <View style={styles.restaurantMeta}>
                  <Text style={styles.cuisineType}>Multi-Cuisine</Text>
                  <View style={styles.deliveryBadge}>
                    <Icon name="local-shipping" size={12} color="#10B981" />
                    <Text style={styles.deliveryText}>Free Delivery</Text>
                  </View>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>4.5</Text>
                <Text style={styles.ratingCount}>(574)</Text>
              </View>
            </View>

            <View style={styles.restaurantDetails}>
              <View style={styles.detailItem}>
                <Icon name="access-time" size={16} color="#6B7280" />
                <Text style={styles.detailText}>OPEN • 9 AM - 10 PM</Text>
              </View>
              <View style={styles.detailItem}>
                <Icon name="location-on" size={16} color="#6B7280" />
                <Text style={styles.detailText}>
                  Near Palani Villas Phase 1 Sector 110, Gurg...
                </Text>
              </View>
            </View>

            {/* Restaurant Image */}
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=400',
              }}
              style={styles.restaurantImage}
            />
            <TouchableOpacity style={styles.directionButton}>
              <Icon name="directions" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryChip}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Menu Items */}
          <View style={styles.menuSection}>
            {menuItems.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.menuItemImage}
                />
                <View style={styles.menuItemInfo}>
                  <Text style={styles.menuItemName}>{item.name}</Text>
                  <View style={styles.menuItemRating}>
                    <Icon name="star" size={14} color="#FFC107" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.originalPrice}>
                      {item.originalPrice}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Cart */}
        <View style={styles.bottomCart}>
          <View style={styles.cartInfo}>
            <Text style={styles.cartItems}>1 item</Text>
            <Text style={styles.cartTotal}>₹ 480</Text>
          </View>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate('MenuDetail')}
          >
            <Text style={styles.cartButtonText}>Add to cart (₹ 480)</Text>
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
  shareButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flex: 1,
  },
  restaurantInfo: {
    padding: 20,
  },
  restaurantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  restaurantMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cuisineType: {
    fontSize: 14,
    color: '#6B7280',
  },
  deliveryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  deliveryText: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '500',
  },
  ratingContainer: {
    alignItems: 'center',
  },
  rating: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  ratingCount: {
    fontSize: 12,
    color: '#6B7280',
  },
  restaurantDetails: {
    gap: 8,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280',
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  directionButton: {
    position: 'absolute',
    bottom: 28,
    right: 16,
    width: 48,
    height: 48,
    backgroundColor: '#1E40AF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryChip: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  menuSection: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  menuItemInfo: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  menuItemRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 12,
    color: '#6B7280',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  originalPrice: {
    fontSize: 14,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  addButton: {
    backgroundColor: '#1E40AF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  bottomCart: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 16,
  },
  cartInfo: {
    flex: 1,
  },
  cartItems: {
    fontSize: 14,
    color: '#6B7280',
  },
  cartTotal: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  cartButton: {
    backgroundColor: '#1E40AF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  cartButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default RestaurantDetailScreen;
