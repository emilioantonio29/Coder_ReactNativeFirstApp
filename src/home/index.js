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

const Home = ({navigation, route}) => {

  
  return (
    <View style={styles.container}>    
        <Text style={styles.container}>Home</Text>
        <View style={styles.NatigationButton}>
            <Button
                title="Ir a Categorias"
                onPress={()=> {navigation.navigate('Categorias')}}
            />
        </View>
    </View>
  );
};

export default Home;