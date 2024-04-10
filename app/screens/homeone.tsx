
import React, { useMemo } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { useTheme, MD3Theme } from 'react-native-paper';

function HomeOneScreen() {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={styles.topView}></View>
      <View style={styles.serviceView}></View>
      <View style={styles.bottomView}></View>
    </View>
  )
}

export default HomeOneScreen
const createStyles = (theme: MD3Theme) => StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
      height: 300,
      backgroundColor: 'red',
    },
    bottomView: {
      height: 200,
      backgroundColor: 'blue',
    },
    serviceView: {
      flex: 1,
      backgroundColor: 'yellow',
    }
})