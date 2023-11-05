import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native'


export default function App() {

 
  const navigation = useNavigation();


  const [newUser, setNewUser] = useState({
    email: '',
    password: ''
  })

  const onChangeText = (key, value) => {
    setNewUser({ ...newUser, [key]: value })
  }

  const handleSignIn = () => {

    console.log(newUser.email, newUser.password)

    signInWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(user)
        navigation.navigate('NewsPage'); 
        Alert.alert('GirişBaşarılı')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage)
        Alert.alert('Hata', 'Kullanıcı adı veya Parola yanlış')
      });

  }

  return (

    <View style={styles.container}>

      <View style={styles.logo} >
        <Image source={require('../pages/Pictures/UdemigLogo.png')}
          style={{ width: 150, height: 150 }} />
      </View>
      <View style={styles.email} >
        <TextInput
          style={styles.emailtxt}
          value={newUser.email}
          onChangeText={(text) => onChangeText('email', text)}
          placeholder='E-mail giriniz' />
      </View>
      <View style={styles.password} >
        <TextInput
          secureTextEntry={true}
          style={styles.passwordtxt}
          value={newUser.password}
          onChangeText={(text) => onChangeText('password', text)}
          placeholder='Şifre giriniz' />
      </View >
      <View style={styles.buton} >
        <TouchableOpacity
          style={styles.butont}
          onPress={() => handleSignIn()} >
          <Text style={styles.butontxt} >Giriş Yap</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.devamEt} >
        <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')} >
          <Text style={styles.devamEttxt} >Kayıt Ol Sayfasına Devam Et >>> </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 70,
  },

  email: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#E2FFE3',
  },

  emailtxt: {
    padding: 10,
    fontSize: 20,
  },

  password: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#E2FFE3',
    marginTop: 10
  },

  passwordtxt: {
    padding: 10,
    fontSize: 20,
  },

  buton: {
    alignItems: 'center',
    marginTop: 30,
    gap: 10,
    padding: 5,
  },

  butont: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#708AE8',
    padding: 10,
    borderRadius: 8,
  },


  butontxt: {
    color: '#FAFAFA',
    fontSize: 25,
  },

  devamEt:{
    marginTop:15,
  },

  devamEttxt:{
    color:'#708AE8',
  },


});