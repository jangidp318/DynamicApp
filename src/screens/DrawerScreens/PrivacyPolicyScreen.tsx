import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const PrivacyPolicyScreen = () => {

    const injectedJavaScript = `
    (function() {
      document.body.innerHTML = document.querySelector('.inner-page').outerHTML;
    })();
    true;
  `;

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'https://www.teachersofbihar.org/privacy-policy' }}
                style={{ flex: 1 }}
                injectedJavaScript={injectedJavaScript}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        </View>
    )
}

export default PrivacyPolicyScreen