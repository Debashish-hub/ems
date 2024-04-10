import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";
import { MD3Theme, useTheme } from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeOneScreen from "./homeone";
import HomeTwoScreen from "./hometwo";


const Tab = createBottomTabNavigator();
const HomeScreen = ({ route, navigation }: HomeScreenInitialProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={HomeOneScreen} />
      <Tab.Screen name="Messages" component={HomeTwoScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const createStyles = (theme: MD3Theme) => StyleSheet.create({})

type HomeScreenInitialProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;