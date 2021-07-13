import React, { Component } from "react";
import { connect } from "react-redux";
import {Text,BackHandler, View, Alert} from 'react-native';
import { NavigationActions } from 'react-navigation';

@connect(({ test }) => ({
    words: test.words
}))
export default class App extends Component {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, navigation } = this.props;
        Alert.alert(
            '退出应用',
            '确认退出应用吗?',
            [
                { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: '确认', onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false }
        );
        return true;
    };

    render() {
        return (
            <View>
                <Text>
                    Hello,world
                </Text>
            </View>
        )
    }
}
