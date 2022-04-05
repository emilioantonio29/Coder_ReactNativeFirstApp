/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView
} from 'react-native';
import {styles} from "./styles"
import Input from './components/atoms/Input/index'
import CustomModal from './components/molecules/CustomModal/index';

const App = () => {

  const [text, setText] = React.useState("");
  const [textList, setTextList] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState({})

  const handleDeleteItem = (id) =>{
    const newList = textList.filter(itemList => itemList.id !== id)
    setSelectedItem({})
    setTextList(newList)
    setModalVisible(!modalVisible)
  } 

  const onHandleModal = (id) => {
    console.warn(id)
    console.log(id)
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible)
  }

  const onChangeText = (value) =>{
    setTexto(value)
  }

  const handleOnChangeInput = (value) =>{
    // console.warn(value)
    setText(value)
  }

  const addItem = () =>{
    setTextList([...textList, {id: textList.length + 1, value: text}]) //spread operator
    setText("")
  }

  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <Input
          // style={styles.input}
          // onChangeText={onChangeText}
          // value={null}
          placeholder='Type here your name'
          autoCorrect={false}
          autoFocus={false} //levanta el teclado automaticamente
          placeholderTextColor="white"
          value={text}
          handleOnChangeText={handleOnChangeInput}
        />
        <Button
          title="Agregar"
          color="purple"
          onPress={()=>addItem()}
        />
      </View>
      <View style={styles.containerList}>
        {/* {textList.length > 0 && textList.map(item =>(
          <Text style={styles.textList} key={item.id}>{item.value}</Text>
        ))} */}
        <FlatList
          data={textList}
          renderItem={(({item}) =>(
          <TouchableOpacity onPress={()=> onHandleModal(item.id)}>
            <Text style={styles.textList}>{item.value}</Text>
          </TouchableOpacity>
          ))}
          keyExtractor={item=> item.id.toString()}
          >
        </FlatList>
        <CustomModal
          title='Descripcion'
          description='confirmar borrado del item '
          selectedItem={selectedItem}
          buttonText='Yes'
          onHandleDeleteItem={handleDeleteItem}
          visible={modalVisible}
        />  
      </View>
    </SafeAreaView>
      <Button 
          title="alert"
          color="purple"
          onPress={()=>alert(textList.value)}
        />
    </>
  );
};



export default App;
