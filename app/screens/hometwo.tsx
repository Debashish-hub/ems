
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useMemo } from 'react'
import { useTheme, MD3Theme } from 'react-native-paper';
import Colors, { ColorDao } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const HomeTwoScreen = () => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../icons/userIcon.jpg")} style={styles.image}/>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.descText}>Software Engineer</Text>
      </View>

      <View style={styles.aboutContainer}>
        <View style={styles.aboutText}>
          {/* <Ionicons/> */}
          <Ionicons name="bag-check-outline" size={24} color={"black"} />
          <Text>Experience</Text>
          <Text>2 Years</Text>
        </View>
        <View style={styles.aboutText}>
          <Ionicons name="trophy-outline" size={24} color={"black"} />
          <Text>Points</Text>
          <Text>1200</Text>
        </View>
        <View style={styles.aboutText}>
          <Ionicons name="star-outline" size={24} color={"black"} />
          <Text>Reviews</Text>
          <Text>4.5</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeTwoScreen

const createStyles = (theme: MD3Theme) => StyleSheet.create({
    container: {
      marginTop: 5,
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 5,
      borderColor: ColorDao.bottomPrimaryGradient,
      borderWidth: 3
    },
    nameText: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
    },
    descText: {
      fontSize: 12,
      color: 'black',
      fontWeight: '500',
    },
    aboutContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20,
    },
    aboutText: {
      alignItems: 'center',
      justifyContent: 'center'
    }
})