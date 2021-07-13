/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import dva from './utils/dva'
import models from './models'
import {
    View,Text
} from "react-native";


const app = dva({
    initialState: {},
    models,
    onError(e) {
        console.log('onError', e)
    },
});

export const store = app._store;

export default app.start(<View><Text>Hello,world</Text></View>)
