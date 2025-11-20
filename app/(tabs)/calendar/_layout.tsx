import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const calendarLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='calendar' options={{headerShown:false}}/>
    </Stack>
  )
}

export default calendarLayout

const styles = StyleSheet.create({})