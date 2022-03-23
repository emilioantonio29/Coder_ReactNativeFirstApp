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
  Modal
} from 'react-native';
import {styles} from "./styles"


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
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          // style={styles.input}
          // onChangeText={onChangeText}
          // value={null}
          placeholder='Type here your name'
          autoCorrect={false}
          autoFocus={false} //levanta el teclado automaticamente
          style={styles.textInput}
          placeholderTextColor="white"
          value={text}
          onChangeText={handleOnChangeInput}
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
        <View style={styles.modalContainer}>
          <Modal
            animationType='slide'
            transparent={false}
            visible={modalVisible}
            onRequestClose={()=>{}} // cuando se intenta cerrar mostrar un mensaje
          >
            <View style={styles.modalTitle}>
              <Text>Descripcion</Text>
            </View>
            <View style={styles.modalContent}>
              <Text> confirmar borrado del item <Text style={styles.modalContentText}>{selectedItem.value}</Text> </Text>
              
            </View>
            <View style={styles.modalButton}>
              <Button
                title="Yes"
                color="purple"
                onPress={()=>handleDeleteItem(selectedItem.id)}
              />
            </View>
          </Modal>
        </View>
      </View>
    </View>
      <Button
          title="alert"
          color="purple"
          onPress={()=>alert(textList.value)}
        />
    </>
  );
};



export default App;
