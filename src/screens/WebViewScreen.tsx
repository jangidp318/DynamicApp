import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';

const WebViewScreen = ({ navigation }: any) => {
    const route = useRoute();
    const { url }: any = route.params;
    console.log(url)

    const handleNavigationChange = (navState: { url: any; }) => {
        const { url } = navState;

        if (url === 'https://www.teachersofbihar.org/contact') {
            navigation.navigate('MainDrawer', { screen: 'ContactUs' })
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onNavigationStateChange={handleNavigationChange}
            />
        </View>
    )
}

export default WebViewScreen