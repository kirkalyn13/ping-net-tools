import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import styles from './Map.styles'
import { COLOR_DARK_PRIMARY } from '../../../styles/Colors.styles'
import { getCellSites } from '../../../services/cellsite'


const defaultLocation = {
  latitude: 15.135001296429074,
  longitude: 120.59028418254404,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
}

const defaultCoords = {
  coords: {
    latitude: defaultLocation.latitude,
              longitude: defaultLocation.longitude
  }
}

const getIconPath = require("../../../assets/images/phone.png")

const Map = () => {
  const [ location, setLocation ] = useState<any>(defaultCoords)
  const [ errorMsg, setErrorMsg ] = useState<any>(null)
  const [ cellSites, setCellSites ] = useState<any>([])

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
    setCellSites(getCellSites())
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Location:</Text>
        <MapView 
          style={styles.map}
          initialRegion={defaultLocation}
          followsUserLocation={true}
          mapType="satellite"
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          <Marker 
            title="Your Current Location"
            pinColor={COLOR_DARK_PRIMARY}
            // image={getIconPath}
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }}/>
        </ MapView>
    </View>
  )
}

export default Map