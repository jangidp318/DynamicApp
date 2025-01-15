import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import WebView from 'react-native-webview';

const AboutScreen = () => {

    const injectedJavaScript = `
    (function() {
      document.body.innerHTML = document.querySelector('.inner-page').outerHTML;
    })();
    true;
  `;

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'https://www.teachersofbihar.org/about-us' }}
                style={{ flex: 1 }}
                injectedJavaScript={injectedJavaScript}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        </View>
    )
}

export default AboutScreen