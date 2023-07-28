import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ActivityIndicator size={'large'} />
            <Text>Is loading...</Text>
        </View>
    )
}