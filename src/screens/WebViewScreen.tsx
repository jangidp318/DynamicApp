import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';
import { getHomeContent } from '../apis/getHomeContent';

const WebViewScreen = ({ navigation }: any) => {
    const route = useRoute();
    const { url }: any = route.params;
    const [htmlContent, setHtmlContent] = useState(null);
    useEffect(() => {
        const fetchHTML = async () => {
            await getHomeContent(url).then(res => {
                setHtmlContent(res.data);
            })
        }
        fetchHTML();
    }, [])

    const handleNavigationChange = async (navState: { url: any; }) => {
        const { url } = navState;
        if (url === 'https://www.teachersofbihar.org/contact') {
            navigation.navigate('MainDrawer', { screen: 'ContactUs' })
        } else {
            await getHomeContent(url).then(res => {
                setHtmlContent(res.data);
            })
        }
    };
    return (
        <View style={{ flex: 1 }}>
            {htmlContent && <WebView
                source={{
                    html: htmlContent
                }}
                style={{ flex: 1 }}
                onNavigationStateChange={handleNavigationChange}
            />}
        </View>
    )
}

export default WebViewScreen