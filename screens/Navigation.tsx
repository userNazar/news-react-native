import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import React from 'react'
import Posts from "./Posts";
import FullPost from "./FullPost";
import { RootStackParamList } from "../types";

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: '#f4511e' },
                headerTintColor: '#fff',
            }}
            >
                <Stack.Screen name="Posts" component={Posts} options={{ title: 'News' }} />
                <Stack.Screen name="FullPost" component={FullPost} options={{ title: 'New' }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
