import Colors from "@/constants/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
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
    backgroundColor: Colors.light.redishButton,
  },
  title: {
    color: Colors.light.text,
    fontFamily: "System",
    fontSize: 14,
  },
});
