import React, { Component } from "react";
import { connect } from "react-redux";
import {Text,BackHandler, View, Alert} from 'react-native';
import { NavigationActions } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

@connect(({ page }) => ({
    pageData: page.portal.result.info,
}))
export default class App extends Component {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        SplashScreen.hide(); // 关闭启动屏幕
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, navigation } = this.props;
        console.log("pageData",this.props.pageData);
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
            <View style={{ flex: 1 }}>
                <Text>
                    Hello,world
                </Text>
            </View>
        )
    }
}
