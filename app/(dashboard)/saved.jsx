// Imports
import { StyleSheet } from 'react-native'

// Custom Layout Components & Colors
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

// Saved Adventures Screen
const Saved = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} title={true}>
                Saved Adventures
            </ThemedText>
            <Spacer />
            
            <ThemedText>Content Coming Soon!</ThemedText>
        </ThemedView>
    )
}

export default Saved

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
})
