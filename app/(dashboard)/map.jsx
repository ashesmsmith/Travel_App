// Imports
import { StyleSheet, useColorScheme } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

// Custom Layout Components & Colors
import ThemedView from '../../components/ThemedView'

// Default Region (Boise, ID)
const INITIAL_REGION = {
    latitude: 43.613739,
    longitude: -116.237651,
    latitudeDelta: 2,
    longitudeDelta: 2
}

// Map Screen - Use Google Maps
const Map = () => {
    const colorScheme = useColorScheme()

    return (
        <ThemedView style={styles.container}>
            <MapView 
                style={styles.map} 
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_REGION}
                showsUserLocation
                showsMyLocationButton
                userInterfaceStyle={colorScheme ?? 'light'}
            />
        </ThemedView>
    )
}

export default Map

// Page Specific Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
})
