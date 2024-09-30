import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Constants from 'expo-constants'



export default function Map({location}) {

    const [markers,setMarkers] = useState([]);

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarkers([...markers, coords]);
    }

    return (
        <SafeAreaView style={styles.container}>
          <MapView 
            style={styles.map}
            region={location}
            mapType='satellite'
            onLongPress={showMarker}
            >
            {markers.map((marker, index) => (
             <Marker
                key={index}
                title={`Marker ${index + 1}`}
                coordinate = {{latitude: marker.latitude, longitude: marker.longitude}}
            />
           ))}
            </MapView>
          
        </SafeAreaView>
      )
    }


const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center',
       // marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },

});