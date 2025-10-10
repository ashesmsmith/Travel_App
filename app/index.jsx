// Imports
import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

// Custom Layout Components & Colors
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import { Colors } from '../constants/Colors'

// Home Screen
const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />

            <ThemedText style={styles.title} title={true}>
                Discover Your Next Adventure
            </ThemedText>
            <Spacer />

            <Link href='/saved' style={styles.link}>
                <ThemedText>Get Started</ThemedText>
            </Link>
            <Spacer height={50}/>
        </ThemedView>
    )
}

export default Home

// Page Specific Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    link: {
        borderColor: Colors.battle,
        borderWidth: 2,
        borderRadius: 5,
        padding: 20,
    }
})