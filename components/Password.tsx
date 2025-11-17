import { Colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface InputProps {
  placeholdertext: string;
  type: "password";
}

const PasswordInput: React.FC<InputProps> = ({ placeholdertext, type }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholdertext}
        secureTextEntry={true}
        keyboardType="default"
        style={styles.input}
        placeholderTextColor={Colors.dark.text}
      />
      
    </View>
  );
};

export default PasswordInput;

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
