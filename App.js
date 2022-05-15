import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React,{ useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';

import MainScreen from './src/Screens/loginScreens/MainScreen'
import SignIn from './src/Screens/loginScreens/SignIn';
import SignUp from './src/Screens/loginScreens/SignUp';
import ForgatPassword from './src/Screens/loginScreens/ForgatPassword'
import HomeScreen from './src/Screens/HomeScreen';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Activity from './src/components/screens/Activity';
import Profile from './src/components/screens/Profile';
import Ionic from 'react-native-vector-icons/Ionicons';
import Status from './src/components/screenComponents/Status';
import FriendProfile from './src/components/screenComponents/FriendProfile';
import EditProfile from './src/components/screenComponents/EditProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Login() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },

          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'Reels') {
              iconName = focused
                ? 'caret-forward-circle'
                : 'caret-forward-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  
  if (initializing) return null;
  
  if (!user) {
    return (
      <Stack.Navigator>
        
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="ForgatPassword" component={ForgatPassword} options={{ headerShown: false }} />
       
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator>
        <Stack.Screen name="Bottom" options={{
          headerShown:false
        }}
         component={BottomTabScreen} />
        <Stack.Screen name="HomeScreen"
        options={{
          headerShown:false
        }}
        component={HomeScreen} />
      
        <Stack.Screen name="Status"
        options={{
          headerShown:false
        }}
        component={Status} />
        <Stack.Screen name="FriendProfile" 
        options={{
          headerShown:false
        }}
        component={FriendProfile} />
        <Stack.Screen name="EditProfile" 
        options={{
          headerShown:false
        }}
        component={EditProfile} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    fontFamily: 'Jameel Noori Nastaleeq'
  }
});
