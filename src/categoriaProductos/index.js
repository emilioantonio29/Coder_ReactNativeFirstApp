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
  TouchableOpacity
} from 'react-native';
import {styles} from '../../styles'
import axios from 'react-native-axios';
import { PRODUCTS } from '../constants/products';

const Categorias = ({navigation, route}) => {
  const {id, title, category} = route.params
  const selectedCategory = PRODUCTS.filter(product => product.category == route.params.id)
  console.log("selectedCategory" + selectedCategory)
  return (
    <View style={styles.container}>    
      {/* <Text style={styles.container}>id: {id}</Text> */}
      <View style={styles.NatigationButton}>
        <Text style={styles.container}>{title}</Text>
        {/* <Button
            title="Productos"
            onPress={()=> {navigation.navigate('ListadoProductos')}}
        /> */}
        {selectedCategory.map((product) => {
          return (
          <View style={{flexDirection:"row"}}>
            
            <Text>{product.name} | Precio:{product.price} | 
            </Text>        
            <TouchableOpacity
              style={{marginLeft: 3}}
              onPress={()=>navigation.navigate('ListadoProductos', {product, title: product.name})}
            >
              <Text>Comprar</Text>
            </TouchableOpacity>
          </View>
          )
        })}
      </View>
    </View>
  );
};

export default Categorias;
 