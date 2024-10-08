import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types'; // Ensure this is the correct import path
import { RouteProp } from '@react-navigation/native';
// Define the type for your route parameters
type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;

function ProductDetailsScreen() {
  const route = useRoute<ProductDetailsScreenRouteProp>();
  
  // Access the productId parameter
  const { productId } = route.params;

  return (
    <View>
      <Text>Product ID: {productId}</Text>
    </View>
  );
}

export default ProductDetailsScreen;
