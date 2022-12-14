import React from "react"
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import Profile from "../components/Profile";
import Register from "../components/Register";
import PerfilUsuario from "../components/PerfilUsuario";
import Iva from "../Screens/I_IVA";
import Info from "../Screens/Informacion";
const Stack= createNativeStackNavigator()
const MainStack = () => {
return (
    <NavigationContainer>
        <Stack.Navigator 
                screenOptions={{
                    headerShown:false,
                    }}>

            <Stack.Screen 
            name='Home'
            component={Home}
            />
            <Stack.Screen 
            name='Iva'
            component={Iva}
            />
             <Stack.Screen 
            name='Info'
            component={Info}
            />
           <Stack.Screen 
            name='LoginForm'
            component={LoginForm}
            />
            <Stack.Screen 
            name='Register'
            component={Register}
            /> 
            <Stack.Screen 
            name='Profile'
            component={Profile}
            /> 
<Stack.Screen 
            name='PerfilUsuario'
            component={PerfilUsuario}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default MainStack;
