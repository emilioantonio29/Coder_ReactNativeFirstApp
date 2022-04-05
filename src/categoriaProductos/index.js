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

const Categorias = ({navigation}) => {

  return (
    <View style={styles.container}>    
      <Text style={styles.container}>Categorias</Text>
      <View style={styles.NatigationButton}>
      <Button
          title="Productos"
          onPress={()=> {navigation.navigate('ListadoProductos')}}
      />
      </View>
    </View>
  );
};

export default Categorias;
 