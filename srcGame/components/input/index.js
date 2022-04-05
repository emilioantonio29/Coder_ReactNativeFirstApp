import React from 'react';
import {TextInput} from 'react-native';

const InputComponent = ({handleOnChange, ...props}) => {
    return(
        <TextInput 
            {...props} 
            onChangeText={handleOnChange}
        />
    )
}

export default InputComponent;