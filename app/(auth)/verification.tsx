import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from "@/constants/theme";
import icon from "@/constants/Images";
import font from "@/constants/Fonts"

const verification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image 
        source={icon.verify}
        style={styles.img}
        />
        <Text style={styles.heading}>
          Check your email and verify
        </Text>
        <Text style={styles.subHeading}>
          Verification link have been sent to you added email Loisbecket@gmail.com
        </Text>
      </View>
    </View>
  )
}

export default verification

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: Colors.light.background,
  },
  view:{
    justifyContent:"center",
    alignItems:"center",
    gap:20,
    marginHorizontal:20,
  },
  img:{
    width:90,
    height:90,
  },
  heading:{
    fontSize:32,
    color:Colors.light.text,
    fontFamily: font.bold,
    textAlign:"center",
  },
  subHeading:{
    fontSize:12,
    color:Colors.light.text,
    fontFamily: font.medium,
    textAlign:"center",
  }
})