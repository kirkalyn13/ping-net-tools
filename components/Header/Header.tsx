import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Header.styles'
import NavBar from '../NavBar/NavBar'

const getSrcPath = require("../../assets/images/logo.png")

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
            source={getSrcPath}
            style={styles.logo}
        />
        <Text style={styles.title}>
            Ping Tools
        </Text>
      </View>
      <NavBar />
    </View>
  )
}

export default Header