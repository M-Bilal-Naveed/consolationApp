import AuthButton from "@/components/buttons/AuthButton";
import images from "@/constants/images";
import Colors from "@/constants/theme";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AuthLayout = ({
  children,
  type,
  ButtonType,
  centerChildren,
}: {
  children: React.ReactNode;
  type: "signin" | "signup" | "Default";
  ButtonType?: boolean;
  centerChildren?: boolean;
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.logos, centerChildren && styles.logosNoFlex]}>
        <Image
          source={images.dd}
          style={{ width: 37, height: 48, resizeMode: "contain" }}
        />
        <Image
          source={images.logo}
          style={{
            width: 82,
            height: 23,
            resizeMode: "contain",
            marginTop: 4,
          }}
        />
      </View>

      <View style={ [styles.centerChildren,childrenStyle]}>
        {children}
      </View>
      <View>
        {ButtonType ? (
          <View>
            <View style={styles.linecontainer}>
              <View style={styles.line} />
              <Text style={styles.linetext}>or</Text>
              <View style={styles.line} />
            </View>
            <View>
              <AuthButton title="Continue With Google" image={images.Google} />
              <View style={{ marginBottom: 20 }} />
              <AuthButton
                title="Continue With Facebook"
                image={images.facebook}
              />
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>

      <View>
        {type === "signin" ? (
          <View style={styles.FooterButton}>
            <Link href="/(auth)/signUp">
              <View style={{ flexDirection: "row", gap: 6 }}>
                <Text style={styles.text}>Don’t have an account?</Text>
                <Text style={styles.FooterText}>Sign Up</Text>
              </View>
            </Link>
          </View>
        ) : type === "signup" ? (
          <View style={styles.FooterButton}>
            <Link href="/(auth)/signIn">
              <View style={{ flexDirection: "row", gap: 6 }}>
                <Text style={styles.text}>Already have an account?</Text>
                <Text style={styles.FooterText}>Login</Text>
              </View>
            </Link>
          </View>
        ) : (
          <View />
        )}
      </View>

      {/* <View>
        {type === "signin" ? (
          <View style={styles.FooterButton}>
            <Link href={"/(auth)/signUp"}>
              <View style={{ flexDirection: "row", gap: 6 }}>
                <Text style={styles.text}>Don’t have an account? </Text>
                <Text style={styles.FooterText}>SignUp</Text>
              </View>
            </Link>
          </View>
        ) : (
          <View style={styles.FooterButton}>
            <Link href={"/(auth)/signIn"}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text style={styles.text}>Already have an account?</Text>
                <Text style={styles.FooterText}>Login</Text>
              </View>
            </Link>
          </View>
        ) : (
        <View>

        </View>
        )
        }
      </View> */}
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    // backgroundColor: Colors.light.background,
    backgroundColor:"red"
  },
  linecontainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.light.text,
  },
  linetext: {
    width: 50,
    textAlign: "center",
    color: Colors.light.text,
  },
  loginbutton: {
    marginTop: 20,
  },
  text: {
    color: Colors.light.Label,
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    lineHeight: 20,
    padding: 10,
    textAlign: "left",
  },
  FooterButton: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 25,
  },
  FooterText: {
    color: Colors.light.redishButton,
    marginVertical: 10,
  },
  logos: {
    // flex: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
    backgroundColor:"blue"
  },
  logosNoFlex: {
    flex: 0,
    marginVertical: 20,
  },
  centerChildren: {
    flex: 1,
    backgroundColor:"green"
    // justifyContent: "center",
    // alignItems: "center",
  },
});
