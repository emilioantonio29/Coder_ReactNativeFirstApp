import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, ScrollView, TouchableOpacity } from "react-native";
import { useSelector, connect, useDispatch } from 'react-redux';
import {CartDeleteProduct, CartConfirm} from '../store/reducers/cart.reducer'

const Cart = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const cartProducts = useSelector(state=>state.cart);
  const handleDeleteItems = (product) =>{
    dispatch(CartDeleteProduct({payload: product}))
  }

  const handleConfirmarCompra = () => {
    dispatch(CartConfirm())
    setModalVisible(false)
  }


  console.log("render1")

  return (
    <View style={styles.centeredView}>
        
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
        <ScrollView style={styles.centeredView}>
          <View style={styles.modalView}>
            {cartProducts.cartList.length && modalVisible ?   

            <ScrollView style={{flex:1}}>
            {cartProducts.cartList.map((product) => 

              <Text style={{textAlignVertical:"center"}} key={product.id}>{product.description} | cantidad: {product.cant} | 

              <TouchableOpacity
                style={{marginTop: 30}}
                onPress={()=>{handleDeleteItems(product)}}
              >
                <Text style={{color: "red", marginLeft: 6, paddingTop:10}}>X</Text>
              </TouchableOpacity>
              
              </Text>)}
            {cartProducts.totalPrice.map((total) => <Text key={total.totalPrice} style={{fontWeight: "bold"}}>total: {total.totalPrice}</Text>)}
              <Pressable
                style={[styles.button, styles.buttonClose, {marginTop: 100}]}
                onPress={() => {handleConfirmarCompra()}}
              >
                <Text style={styles.textStyle}>Comprar</Text>
              </Pressable>
            </ScrollView>
            
            
            
            : <Text>No hay Items agregados al carrito</Text>}

            <Pressable
              style={[styles.button, styles.buttonClose, {marginTop: 100}]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
            <View>

            </View>
          </View>
        </ScrollView>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>CART</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "green",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default connect()(Cart);