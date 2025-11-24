import fonts from "@/constants/fonts";
import Colors from "@/constants/theme";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface LanguageButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ title, style }) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageButton;
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark.redishButton,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  title: {
    color: Colors.light.text,
    fontFamily: fonts.regular,
    fontSize: 14,
  },
});
