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
import {CATEGORIES} from "../constants/categories"
import CategoryGrid from '../categoryGrid/index';

const Home = ({navigation, route}) => {

  const handleSelectCategory = (category) =>{
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
    <FlatList
      data={CATEGORIES}
      keyExtractor={item=> item.id}
      renderItem={renderItem}
    >
      
    </FlatList>
  );
};

export default Home;