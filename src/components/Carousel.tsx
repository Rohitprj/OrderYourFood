import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  Text,
} from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/burger1.png'),
  require('../assets/burger1.png'),
  require('../assets/burger1.png'),
  require('../assets/burger1.png'),
];

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false },
  );

  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: currentIndex === index ? 1 : 0.3 }]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imageContainer: {
    width: width - 40,
    height: 180,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  promoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  promoDiscount: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  discountText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFEB3B',
    marginRight: 5,
  },
  discountLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: 5,
    width: 20,
    borderRadius: 4,
    backgroundColor: '#000',
    marginHorizontal: 4,
  },
});

export default Carousel;
