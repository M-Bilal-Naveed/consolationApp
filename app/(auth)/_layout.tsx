import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signUp" options={{}} />
      <Stack.Screen name="signIn" options={{}} />
      <Stack.Screen name="verification" options={{}} />
      <Stack.Screen name="forgetPassword" options={{}} />
    </Stack>
  );
};

export default AuthLayout;
