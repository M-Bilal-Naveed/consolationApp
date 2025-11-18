import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '@/constants/theme'

type CustomButton ={
    title: string,
}

const CustomButton:React.FC<CustomButton>= ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",

    },

})