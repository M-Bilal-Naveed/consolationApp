import Font from '@/constants/Fonts';
import Colors from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


type CustomButtonProps = {
  title?: string;
  style?: object;
  onPress?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity 
    style={[styles.container, style]}
    onPress={onPress}>
        <LinearGradient
        colors={[Colors.light.redishButton,Colors.light.redishButton]}
        style={styles.background}
        start={{x:0.2,y:0.5}}
        end={{x:0,y:0.5}}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:48,
        borderRadius:15,
        borderWidth:1,
        borderColor:Colors.light.redishButton,
    },
    title:{
        color: Colors.light.text,
        fontFamily: Font.medium,
        fontSize:14,
    },
    background:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 48,
        borderRadius:10,
    }
})
