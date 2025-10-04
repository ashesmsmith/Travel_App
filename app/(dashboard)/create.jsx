import { StyleSheet } from 'react-native'

// Custom Layout Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Create = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} title={true}>
                Start an Adventure
            </ThemedText>
            <Spacer />

            <ThemedText>Content Coming Soon!</ThemedText>
        </ThemedView>
    )
}

export default Create

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