import Font from "@/constants/fonts";
import Colors from "@/constants/theme";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type AuthButtonProps = {
  title?: string;
  image?: ImageSourcePropType;
  style?: object;
  onPress?: (event: GestureResponderEvent) => void;
};

const AuthButton: React.FC<AuthButtonProps> = ({ title, image, style }) => {
  function onPress(event: GestureResponderEvent): void {
    throw new Error("Function not implemented.");
  }

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.buttonView}>
        <Image source={image} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.light.AuthBorder,
    backgroundColor: Colors.light.text,
  },
  buttonView: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.light.AuthText,
    fontFamily: Font.medium,
    fontSize: 14,
  },
  icon: {
    width: 18,
    height: 18,
  },
});
