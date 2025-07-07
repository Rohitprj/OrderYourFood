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

interface MenuDetailScreenProps {
  navigation: any;
}

const MenuDetailScreen: React.FC<MenuDetailScreenProps> = ({navigation}) => {
  const [quantity, setQuantity] = useState(1);

  const recommendedItems = [
    {
      name: 'Chicken Shawarma',
      rating: 4.5,
      price: '₹ 480',
      originalPrice: '₹ 500',
      image: 'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chicken Shawarma',
      rating: 4.5,
      price: '₹ 480',
      originalPrice: '₹ 500',
      image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Chicken Shawarma',
      rating: 4.5,
      price: '₹ 480',
      originalPrice: '₹ 500',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
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
          <Text style={styles.headerTitle}>About This Menu</Text>
          <TouchableOpacity style={styles.shareButton}>
            <Icon name="share" size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Menu Item Detail */}
          <View style={styles.menuDetail}>
            <View style={styles.menuImageContainer}>
              <Image
                source={{uri: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400'}}
                style={styles.menuImage}
              />
              <TouchableOpacity style={styles.favoriteButton}>
                <Icon name="favorite-border" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.menuInfo}>
              <Text style={styles.menuName}>Chicken Butter Masala</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>₹ 450</Text>
                <Text style={styles.originalPrice}>₹ 500</Text>
              </View>

              <View style={styles.deliveryInfo}>
                <View style={styles.deliveryBadge}>
                  <Icon name="local-shipping" size={12} color="#10B981" />
                  <Text style={styles.deliveryText}>Free Delivery</Text>
                </View>
                <View style={styles.timeInfo}>
                  <Icon name="access-time" size={12} color="#6B7280" />
                  <Text style={styles.timeText}>20 min</Text>
                </View>
              </View>

              <Text style={styles.description}>
                Description{'\n'}
                Tender chicken pieces are simmered in a rich, creamy tomato-based sauce, seasoned with aromatic spices. Garnished with fresh herbs and served with basmati rice or naan bread.
              </Text>
            </View>
          </View>

          {/* Recommended for you */}
          <View style={styles.recommendedSection}>
            <Text style={styles.sectionTitle}>Recommended for you</Text>
            {recommendedItems.map((item, index) => (
              <View key={index} style={styles.recommendedItem}>
                <Image source={{uri: item.image}} style={styles.recommendedImage} />
                <View style={styles.recommendedInfo}>
                  <Text style={styles.recommendedName}>{item.name}</Text>
                  <View style={styles.recommendedRating}>
                    <Icon name="star" size={14} color="#FFC107" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                  <View style={styles.recommendedPriceContainer}>
                    <Text style={styles.recommendedPrice}>{item.price}</Text>
                    <Text style={styles.recommendedOriginalPrice}>{item.originalPrice}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Add to Cart */}
        <View style={styles.bottomCart}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}>
              <Icon name="remove" size={20} color="#1E40AF" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity + 1)}>
              <Icon name="add" size={20} color="#1E40AF" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.addToCartButton}
            onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.addToCartButtonText}>Add to cart (₹ 450)</Text>
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
  shareButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flex: 1,
  },
  menuDetail: {
    padding: 20,
  },
  menuImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  menuImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuInfo: {
    gap: 12,
  },
  menuName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  originalPrice: {
    fontSize: 16,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#6B7280',
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  recommendedSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  recommendedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  recommendedImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  recommendedInfo: {
    flex: 1,
  },
  recommendedName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  recommendedRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#6B7280',
  },
  recommendedPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  recommendedPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  recommendedOriginalPrice: {
    fontSize: 12,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  addButton: {
    backgroundColor: '#1E40AF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  addButtonText: {
    fontSize: 12,
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 4,
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    paddingHorizontal: 16,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#1E40AF',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default MenuDetailScreen;