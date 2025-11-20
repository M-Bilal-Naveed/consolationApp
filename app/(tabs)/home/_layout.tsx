import { Stack } from "expo-router";

import { StyleSheet, Text, View } from 'react-native'

const homeLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="home" options={{headerShown:false}}/>
    </Stack>
  )
}

export default homeLayout

const styles = StyleSheet.create({})