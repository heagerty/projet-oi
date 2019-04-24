// Import libraries
import React from 'react';
import { Text, View } from 'react-native';




//Make and style component
const Header = () => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Projet OI</Text>
        </View>
    );
};


//align = left-right
//justify = up-down
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'AmericanTypewriter'
    }
};


//Make component available to other parts of the app
//AppRegistry is for root (App.js) only, others we use export
export default Header;
