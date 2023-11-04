import { StyleSheet, Text, View, Image, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomePage = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <SafeAreaView>
                <TouchableOpacity style={styles.logo} >
                    <Image source={require('../pages/Pictures/UdemigLogo.png')}
                        style={{ width: 150, height: 150 }} />
                </TouchableOpacity>
                <View style={styles.haberleri} >
                    <Text style={styles.txt} >Haberleri</Text>
                </View>
                <View style={styles.butonContainer} >
                    <TouchableOpacity style={styles.buton1}
                        onPress={() => navigation.navigate('LoginPage')}
                    >
                        <Text style={styles.btn1} >Giriş Yap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buton2}
                        onPress={() => navigation.navigate('RegisterPage')}
                    >
                        <Text style={styles.btn2} >Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default WelcomePage

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },

    haberleri: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    txt: {
        fontSize: 50,
        color: '#708AE8'
    },

    butonContainer: {
        alignItems: 'center',
        marginTop: 30,
        gap: 10,
        padding: 5
    },

    buton1: {
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#708AE8',
        padding: 10,
        borderRadius: 8
    },

    btn1: {
        color: '#FAFAFA',
        fontSize: 25
    },

    btn2: {
        color: '#FAFAFA',
        fontSize: 25
    },

    buton2: {
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#708AE8',
        padding: 10,
        borderRadius: 8
    }

})