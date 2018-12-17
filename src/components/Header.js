import React from 'react';
import { Text, View } from 'react-native';



const Header = (props) => {
    const { texTStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={texTStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddinTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    texTStyle: {
        fontSize: 20
    }


};

export default Header;
