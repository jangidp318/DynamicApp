import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { contactUs } from '../../apis/contactUs';

const ContactUsScreen = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const resestFields = () => {
    setName('');
    setSubject('');
    setContactNumber('');
    setEmail('');
    setMessage('');
  }

  return (
    <View style={styles.contaner}>
      <TextInput placeholder='Name' value={name} onChangeText={t => setName(t)} style={styles.textInputView} />
      <TextInput placeholder='Email' value={email} onChangeText={t => setEmail(t)} style={styles.textInputView} />
      <TextInput placeholder='Subject' value={subject} onChangeText={t => setSubject(t)} style={styles.textInputView} />
      <TextInput placeholder='Contact Number' keyboardType='name-phone-pad' value={contactNumber} onChangeText={t => setContactNumber(t)} style={styles.textInputView} />
      <TextInput placeholder='Message' value={message} onChangeText={t => setMessage(t)} style={styles.messageTextInputView} multiline={true} numberOfLines={4} textAlignVertical="top" />
      <TouchableOpacity onPress={async () => {
        await contactUs(name, subject, contactNumber, message, email).then(res => {
          Alert.alert('Request Sent', `${res.message}`, [
            {
              text: 'OK',
              onPress: () => {
                resestFields();
              },
            }
          ]);
        })
      }} style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity >
    </View >
  )
}

export default ContactUsScreen

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20
  },
  textInputView: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'lightgrey',
    margin: 10,
    marginHorizontal: 20,
    borderRadius: 10
  },
  messageTextInputView: {
    height: 150,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    color: '#333',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 10,
    marginHorizontal: 20,
  },
  submitButton: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18
  }
})