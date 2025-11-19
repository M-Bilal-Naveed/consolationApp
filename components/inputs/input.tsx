import Colors from "@/constants/theme";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface InputProps {
  placeholdertext: string;
  type: "default" | "email-address";
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholdertext}
        keyboardType={props.type}
        placeholderTextColor={Colors.dark.text}
        style={styles.input}
      />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.light.shadow,
    paddingHorizontal: 14,
    width: "100%",
    height: 54,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.light.shadow,
    fontSize: 16,
    color: Colors.dark.text,
    marginVertical: 10,
  },
});
