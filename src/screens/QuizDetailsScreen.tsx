import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';

const QuizDetailsScreen = () => {
    const route = useRoute();
    const { url }: any = route.params;
    return (
        <WebView
            source={{ uri: url }}
            style={{ flex: 1 }}
        />
    )
}

export default QuizDetailsScreen