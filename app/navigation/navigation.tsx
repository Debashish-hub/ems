import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationRouter = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);


export type RootStackParamList = {
  Login: undefined,
  Home: undefined,
  Profile: { userId: string };
}

