import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Card
} from 'react-native';
import {styles} from '../../styles'

const ProductDetail = ({product}) => {



  return (
    
    <View>
        <Text>{product.producto.nombre}</Text>
    </View>
  );
};

export default ProductDetail;