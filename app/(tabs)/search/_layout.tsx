import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const searchLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='search' options={{headerShown: false}} />
    </Stack>
  )
}

export default searchLayout

const styles = StyleSheet.create({})