import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';

const WebViewScreen = () => {
    const route = useRoute();
    const { url }: any = route.params;
    console.log(url)
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
            />
        </View>
    )
}

export default WebViewScreen