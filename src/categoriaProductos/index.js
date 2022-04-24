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
// import { PRODUCTS } from '../constants/products'; // Reemplazado por redux
import { useSelector, connect, useDispatch } from 'react-redux';

const Categorias = ({navigation, route}) => {
  const dispatch = useDispatch();
  // const productList = useSelector(state=>state.categories.selectedCategory);
  const {id, title, category} = route.params
  // const selectedCategory = PRODUCTS.filter(product => product.category == route.params.id)
  // console.log("selectedCategory" + selectedCategory)

  const categoryProduct = useSelector(state=>state.products.filteredProducts);

  const handleTouchable = (product, name) =>{
    // console.log(product)
    // console.log(name)
    //dispatch(filteredProducts({payload: category.id}))
    navigation.navigate('ListadoProductos', {product, title: name})
  }




  return (
    <View style={styles.container}>    
      {/* <Text style={styles.container}>id: {id}</Text> */}
      <View style={styles.NatigationButton}>
        <Text style={styles.container}>{title}</Text>
        {/* <Button
            title="Productos"
            onPress={()=> {navigation.navigate('ListadoProductos')}}
        /> */}
        {categoryProduct.map((product) => {
          return (
          <View style={{flexDirection:"row"}} key={product.id}>
            
            <Text>{product.name} | Precio:{product.price} | 
            </Text>        
            <TouchableOpacity
              style={{marginLeft: 3}}
              onPress={()=>{handleTouchable(product, product.name)}}
            >
              <Text style={{color: "green"}}>Comprar</Text>
            </TouchableOpacity>
          </View>
          )
        })}
      </View>
      <View style={{marginTop: 100}}>
        <Button
          title="Console Log: Productos filtrados REDUX"
          onPress={()=>console.log(categoryProduct)}
        />
      </View>
    </View>
  );
};

export default connect()(Categorias);
 