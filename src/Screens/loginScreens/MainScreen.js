import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="#007fcb" />

      <Image style={styles.logo} source={require('../../assets/images/logoT.png')} />

      <View style={styles.login}>
        <TouchableOpacity style={styles.loginText} onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#007fcb" />
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.txt}>لاگ ان کریں</Text>
            <Icon name="user-lock" size={15} color="#007fcb" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginText} onPress={() => navigation.navigate('SignUp')}>
          <Icon name="arrow-left" size={20} color="#007fcb" />
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.txt}>نیا اکاؤنٹ رجسٹر کریں</Text>
            <Icon name="user-plus" size={15} color="#007fcb" />
          </View>
          
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    width: '80%',
    height: '30%',
    resizeMode: 'contain'

  },

  login: {
    width: '80%',
    height: 250,
    borderRadius: 15,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    flexDirection: 'row',
    backgroundColor: 'rgb(230, 230, 230)',
    padding: 10,
    paddingRight: 20,
    borderRadius: 30,
    width: '80%',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  txt:{
    fontFamily:'Jameel Noori Nastaleeq',
    color: '#000', 
    marginRight: 10, 
    fontSize: 18,
    
  }
});

export default LoginScreen;