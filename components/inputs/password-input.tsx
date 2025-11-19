import Colors from "@/constants/theme";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
interface InputProps {
  placeholdertext: string;
  type: "password";
}

const PasswordInput: React.FC<InputProps> = ({ placeholdertext, type }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View>
      <TextInput
        placeholder={placeholdertext}
        secureTextEntry={true}
        keyboardType="default"
        style={styles.input}
        placeholderTextColor={Colors.dark.text}
      />
      <View style={{ position: "absolute", right: 10, top: 20 }}>
        <TouchableOpacity onPress={handlePassword}>
          <Icon
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
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
    position: "relative",
  },
  icon: {
    padding: 5,
  },
});
