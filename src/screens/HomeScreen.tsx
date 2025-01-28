import { View, Text, FlatList, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const socialMedia = [
    {
        logo: require('../assets/social-media-icons/Facebook_logo.png'),
        name: 'Facebook',
        url: 'https://www.facebook.com/teachersofbihar',
    },
    {
        logo: require('../assets/social-media-icons/Twitter_logo.png'),
        name: 'Twitter',
        url: 'https://twitter.com/teachersofbihar',
    },
    {
        logo: require('../assets/social-media-icons/Facebook_Group_logo.png'),
        name: 'Facebook Group',
        url: 'https://www.facebook.com/groups/1907206889337788/',
    },
    {
        logo: require('../assets/social-media-icons/Instagram_logo.png'),
        name: 'Instagram',
        url: 'https://www.instagram.com/teachersofbihar/',
    },
    {
        logo: require('../assets/social-media-icons/Youtube_logo.png'),
        name: 'Youtube',
        url: 'https://www.youtube.com/@TeachersOfBihar',
    },
    {
        logo: require('../assets/social-media-icons/Linkedin_logo.png'),
        name: 'Linkedin',
        url: 'https://www.linkedin.com/company/teachersofbihar/',
    },
    {
        logo: require('../assets/social-media-icons/Blogspot_logo.png'),
        name: 'BlogSpot',
        url: 'https://teachersofbihar.blogspot.com/',
    }
]


const menuItems = [
    {
        title: 'Website',
        icon: require('../assets/icons/Website.png'),
        url: 'https://www.teachersofbihar.org/',
    },
    {
        title: 'School on Mobile',
        icon: require('../assets/icons/SOM.png'),
        url: 'https://www.teachersofbihar.org/',
    },
    {
        title: 'Quiz',
        icon: require('../assets/icons/Quiz1.png'),
        screen: 'QuizScreen',
    },
    {
        title: 'Survey',
        icon: require('../assets/icons/Survey.png'),
        url: 'https://www.teachersofbihar.org/',
    },
]



const HomeScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{ flex: 1, margin: 10, alignItems: 'center' }} onPress={() => {
                            { item?.url && navigation.navigate('WebViewScreen', { url: item.url }) }
                            { item.screen && navigation.navigate(item.screen) }
                        }}>
                            <View style={styles.imageContainer}>
                                <Image source={item.icon} style={{ width: 150, height: 150, borderRadius: 75, borderWidth: 5, borderColor: 'white', margin: 5 }} />
                            </View>
                            <Text style={{ fontWeight: '600', fontSize: 18, marginVertical: 20, }}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
                numColumns={2}
            />
            <View style={{ alignItems: 'center', backgroundColor: 'white', height: 50, flexDirection: 'row', justifyContent: 'space-around' }}>
                {socialMedia.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={{}} onPress={async () => { await Linking.openURL(item.url); }}>
                            <Image source={item.logo} style={{ width: 30, height: 30, margin: 10 }} resizeMode='contain' />
                        </TouchableOpacity>
                    )
                })
                }
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        elevation: 8,
    }
})