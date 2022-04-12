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
  FlatList
} from 'react-native';
import {styles} from '../../styles'
//import {CATEGORIES} from "../constants/categories" // reemplazo por redux
import CategoryGrid from '../categoryGrid/index';
import { useSelector, connect, useDispatch } from 'react-redux';
import {selectedCategory} from '../store/reducers/category.reducer'
import {filteredProducts } from '../store/reducers/product.reducer'


const Home = ({navigation, route}) => {

  const dispatch = useDispatch();
  const categoryProduct = useSelector(state=>state.categories.categories);
  const handleSelectCategory = (category) =>{
    dispatch(selectedCategory({payload: category.id})) // SETEAR la categoria seleccionada en Store
    dispatch(filteredProducts({payload: category.id})) // SETEAR los productos filtrados por categoria, tambien en el STORE
    navigation.navigate('Categorias', {id: category.id, title: category.name, category})
  }

  const renderItem = ({item}) => <CategoryGrid item={item} onSelected={handleSelectCategory}/>
  return (
    // <View style={styles.container}>    
    //     <Text style={styles.container}>Home</Text>
    //     <View style={styles.NatigationButton}>
    //         <Button
    //             title="Ir a Categorias"
    //             onPress={()=> {navigation.navigate('Categorias', {title: "Categories"})}}
    //         />
    //     </View>
    // </View>
    <View>

      <FlatList
        data={categoryProduct}
        keyExtractor={item=> item.id}
        renderItem={renderItem}
        >
      </FlatList>
      <View style={{marginTop: 100}}>
        <Button
          title="Console Log: Categorias de REDUX"
          onPress={()=>console.log(categoryProduct)}
        />
      </View>
    </View>
  );
};

export default connect()(Home);