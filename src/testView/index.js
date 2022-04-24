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
import Cart from '../cart';

import { useSelector, connect, useDispatch } from 'react-redux';

const TestView = ({navigation, route}) => {

  return (
    <View>    
      <Text>Test Text</Text>
      <Cart></Cart>
    </View>
  );
};

export default connect()(TestView);
 