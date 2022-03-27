import React from 'react';
import {View, Text, Modal, Button} from 'react-native';
import {styles} from './styles';

const CustomModal = ({title, description, selectedItem, buttonText, onHandleDeleteItem, visible}) =>{
    return(
        <>
            <View style={styles.modalContainer}>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={visible}
                    onRequestClose={()=>{}} // cuando se intenta cerrar mostrar un mensaje
                >
                    <View style={styles.modalTitle}>
                        <Text>{title}</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <Text> {description}
                            <Text style={styles.modalContentText}>{selectedItem.value}</Text> 
                        </Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button
                            title={buttonText}
                            color="purple"
                            onPress={()=>onHandleDeleteItem(selectedItem.id)}
                        />
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default CustomModal;