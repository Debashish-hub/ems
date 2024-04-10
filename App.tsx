import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import { NavigationRouter } from "./app/navigation/navigation";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";

export default function App() {
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });
  const theme: ThemeProp = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#F3901D",
    },
    roundness: 20,
  };
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationRouter />
      </PaperProvider>
    </QueryClientProvider>
  );
}
