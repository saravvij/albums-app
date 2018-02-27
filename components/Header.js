import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Header = (props) => {
    return (
        <View style={styles.headerStyle}>
        <Text>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#add8e6',
        borderWidth: 1
    }
});

export default Header;
