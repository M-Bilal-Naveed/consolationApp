import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  Colors  from '@/constants/theme';
import Font from '@/constants/Fonts'

type AuthButton ={
    title?: string,
    image?: ImageSourcePropType,
    style?: object,
    onPress?: ()=> void,
}

const AuthButton:React.FC<AuthButton>= ({title, image, style, onPress}) => {
  return (
    <TouchableOpacity 
    style={[styles.container, style]}
    onPress={onPress}>
        <View style={styles.buttonView}>
            <Image
            source={image}
            style={styles.icon}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default AuthButton

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:48,
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.light.AuthBorder,
        backgroundColor: Colors.light.text,
    },
    buttonView:{
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color: Colors.light.AuthText,
        fontFamily: Font.medium,
        fontSize:14,
    },
    icon:{
        width:18,
        height:18,
    }
})