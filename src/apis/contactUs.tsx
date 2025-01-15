import { Alert } from "react-native";
import { API_KEY, BASE_URL } from "../Constants";


export const contactUs = async (name: string, subject: string, contactNumber: string, message: string, email: string) => {
    const url = `${BASE_URL}/contacts`;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('subject', subject);
    formData.append('contact', contactNumber);
    formData.append('detail', message);
    formData.append('email', email);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-API-KEY': API_KEY,
            },
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            Alert.alert('Error', `HTTP ${response.status}`);
        }
    } catch (error: any) {
        Alert.alert('Error', error.message);
    }
}