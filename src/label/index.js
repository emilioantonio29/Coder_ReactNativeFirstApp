import React from "react";
import {View, Text} from 'react-native';
import { styles } from "../styles";

const Label = ({children, label, labelStyle, subLabel, subLabelStyle}) =>{
    return(
        <View style={styles.container}>
            <Text>{label}</Text>
            {children}
            {subLabel && <Text>{subLabel}</Text>}
        </View>
    )
}

export default Label;