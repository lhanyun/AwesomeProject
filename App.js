/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'

export default class ButtonAndEvent extends Component {

    render() {
        return(
            <View style={styles.container}>


            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
    },

    page1: {
        flex: 1,
        backgroundColor: 'red',
    },
    page2: {
        flex: 1,
    }

});
