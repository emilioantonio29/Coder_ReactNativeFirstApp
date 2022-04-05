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

const ListadoProductos = ({navigation}) => {

  return (
    
    <View style={styles.container}>    
      <Text style={styles.container}>Product List</Text>
      <View style={styles.NatigationButton}>
      <Button
          title="Volver al Home"
          onPress={()=> {navigation.navigate('Home')}}
          color="black"
      />
      </View>
    </View>
  );
};

export default ListadoProductos;