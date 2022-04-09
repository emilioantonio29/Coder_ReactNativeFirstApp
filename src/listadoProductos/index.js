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

const ListadoProductos = ({navigation, route}) => {

  const [products, setProducts] = React.useState([]);
  
  // axios.get('https://soy-glucosa-project.herokuapp.com/apiFirebase/productos')
  // .then(function (response) {
  //   console.log(response.data);
  //   setProducts(response.data)
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  return (

    <ScrollView style={styles.container}>    
      <Text style={{marginBottom:20}}>Detalle del producto: </Text>
      <Text>Id del Producto: {route.params.product.id}</Text>
      <Text>Categoria: {route.params.product.category}</Text>
      <Text>Descripcion: {route.params.product.description}</Text>
      <Text>Peso: {route.params.product.weight}</Text>
      <Text>Price: {route.params.product.price}</Text>

      <View style={{height:40, marginTop: 30}}>
        <Button
            title="Volver al Home"
            onPress={()=> {navigation.navigate('Home')}}
            color="black"
        />

      </View>
      {/* <Button
            title="Volver al Home"
            onPress={()=> {console.log(route.params.product)}}
            color="black"
        /> */}
      {/* {
        products.map((product)=>{
          return <ProductDetail key={product.producto.id} product={product}/>
        })
      } */}
    </ScrollView>
  );
};

export default ListadoProductos;