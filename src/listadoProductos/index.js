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
  Pressable
} from 'react-native';
import {styles} from '../../styles'
import axios from 'react-native-axios';
import ProductDetail from './productList'
import { useSelector, connect, useDispatch } from 'react-redux';
import {CartProducts} from '../store/reducers/cart.reducer'

const ListadoProductos = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [products, setProducts] = React.useState([]);

  const handleSelectCategory = (test) =>{
    dispatch(CartProducts({payload: test}))
    alert("producto agregado al carrito")
  }
  
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
      <View style={{height:80, marginTop: 10, alignItems: "center"}}>
        <Pressable
          style={{backgroundColor: "green", borderRadius: 10, padding: 10, elevation: 2}}
          onPress={() => {handleSelectCategory(route.params.product)}}
        >
          <Text style={{color: "white"}}>Agregar al carrito</Text>
        </Pressable>
      </View>
      <View style={{height:80, marginTop: 0}}>
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

export default connect()(ListadoProductos);