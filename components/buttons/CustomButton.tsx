import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  Colors  from '@/constants/theme';
import Font from '@/constants/Fonts'

type CustomButton ={
    title?: string,
}

const CustomButton:React.FC<CustomButton>= ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:48,
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.light.text,
        backgroundColor: Colors.light.redishButton,
    },
    title:{
        color: Colors.light.text,
        fontFamily: Font.medium,
        fontSize:14,
    }
})