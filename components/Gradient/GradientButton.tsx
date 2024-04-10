import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MD3Theme, useTheme } from "react-native-paper";
import { ColorDao } from "@/constants/Colors";

const GradientButton = (props: GradientButtonProps) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]) 
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={
          props.colors != undefined
            ? props.colors
            : [ColorDao.topPrimaryGradient, ColorDao.bottomPrimaryGradient]
        }
        start={{ x: 0.1, y: 0.9 }}
        end={{ x: 0.9, y: 0.1 }}
        style= {styles.container}
      >
        <Text style={styles.title}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const createStyles = (theme: MD3Theme) => StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    title: {
        color: theme.colors.onPrimary
    }
});

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  colors?: string[];
}
