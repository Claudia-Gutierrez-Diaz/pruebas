import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View,Item } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Boton from "../components/Boton";
import Profile from "./Profile";
import {AppLoading} from 'expo';
import {FontAwesome}from '@expo/vector-icons';

const LoginForm = ({navigation}) => {
    return (
 
        < Text >¡Hola esto mostrara el perfil del usuario</Text>
    );   
    }
export default LoginForm;
