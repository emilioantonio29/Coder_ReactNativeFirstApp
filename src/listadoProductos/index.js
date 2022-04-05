import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import {styles} from '../../styles'
import axios from 'react-native-axios';
import ProductDetail from './productList'

const ListadoProductos = ({navigation}) => {

  const [products, setProducts] = React.useState([]);
  
  axios.get('https://soy-glucosa-project.herokuapp.com/apiFirebase/productos')
  .then(function (response) {
    console.log(response.data);
    setProducts(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    
    <ScrollView style={styles.container}>    
      <Text style={styles.container}>Product List (estos productos vienen de una API)</Text>
      <View style={styles.NatigationButton}>
      <Button
          title="Home"
          onPress={()=> {navigation.navigate('Home')}}
          color="black"
      />
      </View>
      {
        products.map((product)=>{
          return <ProductDetail key={product.producto.id} product={product}/>
        })
      }
    </ScrollView>
  );
};

export default ListadoProductos;