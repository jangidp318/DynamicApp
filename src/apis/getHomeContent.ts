import { Alert } from "react-native";
import { API_KEY, BASE_URL } from "../Constants";

export const getHomeContent = async (url: string) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-API-KEY': API_KEY,
            },
        });

        if (response.ok) {
            const res = await response.json();
            return res;
        } else {
            Alert.alert('Error', `${response.status}`);
        }
    } catch (error: any) {
        Alert.alert('Error', error.message);
    }
}