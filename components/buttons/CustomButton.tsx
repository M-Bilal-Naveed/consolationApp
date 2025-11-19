import Font from "@/constants/fonts";
import Colors from "@/constants/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

type CustomButtonProps = {
  title?: string;
  style?: object;
  onPress?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <LinearGradient
        colors={[Colors.light.text, Colors.light.redishButton]}
        style={styles.background}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.light.text,
  },
  title: {
    color: Colors.light.text,
    fontFamily: Font.medium,
    fontSize: 14,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 48,
    borderRadius: 10,
  },
});
