import React from 'react'
import { View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp, useNavigation as useNavigationBase } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../routes/types';


type FeedScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>;


function FeedScreen() {
  const navigation = useNavigation<FeedScreenNavigationProp>();

  return (
    <View>
         <Button
          title="Go to Product Details"
          onPress={() => navigation.navigate('ProductDetails', { productId: '123' })}

        />
    </View>
  )
}

export default FeedScreen