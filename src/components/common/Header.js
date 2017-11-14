
import React from 'react';
import { Text, View } from 'react-native';


const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
        
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 1,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30
    }
};

export { Header };
