import { Image, StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import icon from '@/constants/Images';
import font from '@/constants/Fonts';
import Color from '@/constants/theme';

const tabLayout = () => {

  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle: styles.tabBar,
    }}
    >
        {/* Home Tab */}
        <Tabs.Screen 
        name='home'
        options={{
            tabBarIcon: ({focused}) =>(
                <View
                style={[]}
                >
                    <Image 
                    source={focused ? icon.homeRed : icon.home} 
                    style={styles.img}
                    />
                </View>
            )
        }}
        />
        {/* Search Tab */}
        <Tabs.Screen 
        name='search'
        options={{
            tabBarIcon: ({focused}) =>(
                <View
                style={[]}
                >
                    <Feather 
                    name="search" 
                    size={24} 
                    color={focused ? Color.light.redishButton: Color.light.tabIcon} />
                    {/* <Image 
                    source={focused ? icon.homeRed : icon.search} 
                    style={styles.img}
                    /> */}
                </View>
            )
        }}
        />
        {/* Chat Tab */}
        <Tabs.Screen 
        name='chat'
        options={{
            tabBarIcon: ({focused}) =>(
                <View
                style={[]}
                >
                    <Image 
                    source={focused ? icon.chatRed : icon.chat} 
                    style={styles.img}
                    />
                </View>
            )
        }}
        />
        {/* Calender Tab */}
        <Tabs.Screen 
        name='calendar'
        options={{
            tabBarIcon: ({focused}) =>(
                <View
                style={[styles.view]}
                >
                    <Feather 
                    name="calendar" 
                    size={24} 
                    color={focused ? Color.light.redishButton : Color.light.tabIcon} />
                    {/* <Image 
                    source={focused ? icon.homeRed : icon.calendar} 
                    style={styles.img}
                    /> */}
                </View>
            )
        }}
        />
        {/* Profile Tab */}
        <Tabs.Screen 
        name='profile'
        options={{
            tabBarIcon: ({focused}) =>(
                <View
                style={[]}
                >
                    <Image 
                    source={focused ? icon.profileRed : icon.profile} 
                    style={styles.img}
                    />
                </View>
            )
        }}
        />
    </Tabs>
  )
}

export default tabLayout

const styles = StyleSheet.create({
    img:{
        width:24,
        height:24,
    },
    tabBar:{
        width:"100%",
        height:93,
        borderWidth:1,
        borderColor: Color.light.AuthText,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingTop:15,
        backgroundColor: Color.light.tabColor,
    },
    view:{
    }
})