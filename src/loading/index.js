import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, ScrollView, TouchableOpacity,Dimensions, ActivityIndicator } from "react-native";
const {width, height} = Dimensions.get('window')
import { colors } from "../constants/themes";
import { GlobalContext } from "../context";

const Loading = () => {
  const [modalVisible, setModalVisible] = React.useState(true)
  const {showLoading, setShowLoading} = React.useContext(GlobalContext);


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
                <ActivityIndicator size="large" color={colors.authError}></ActivityIndicator>
                <Text style={{color:colors.authError, marginTop:10}}>Loading...</Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose, {marginTop: 100}]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable> */}
            <View>

            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    //flex: 1,
    // justifyContent: "center",
    //alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    marginTop: height/2.5,
    opacity: 1,
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 0
    },
    // elevation: 5
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

export default Loading;