module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
    "plugins": [
        ["import", { "libraryName": "antd-mobile-rn" }],
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ]
};
