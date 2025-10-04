import { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
import Ionicons from '@expo/vector-icons/Ionicons'

// Custom Layout Components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedInput from '../../components/ThemedInput'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'

const Create = () => {
    const [location, setLocation] = useState('')
    const [locations, setLocations] = useState([])

    const handleSubmit = () => {
        if (location.trim() === '') return //Skip if empty
        const newLocation = { id: Date.now().toString(), name: location.trim() }
        setLocations((prev) => [...prev, newLocation]) // Add new location to array
        setLocation('') // Clear Input
    }

    const handleDelete = (id) => {
        setLocations(locations.filter(item => item.id !== id))
    }

    const handleDrag = ({ data }) => {
        setLocations(data)
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} title={true}>
                Start an Adventure!
            </ThemedText>

            <Spacer />

            <ThemedText style={{ fontWeight: 'bold' }}>Enter a Location:</ThemedText>

            <Spacer height={10} />

            <ThemedInput 
                style={{ width: '80%', marginBottom: 20 }}
                placeholder='Boise, ID'
                value={location}
                onChangeText={setLocation}
            />

            <ThemedButton style={{ width: 150 }} onPress={handleSubmit}>
                Add Location
            </ThemedButton>

            <ThemedView style={{width: '100%', flex: 1 }}>
            <DraggableFlatList
                data={locations}
                keyExtractor={(item) => item.id}
                extraData={locations}
                onDragEnd={({ data }) => setLocations(data)}
                renderItem={({ item, drag, isActive, index }) => (
                    <View
                        style={[styles.listItem,
                        isActive && styles.activeItem
                        ]}
                    >
                        <TouchableOpacity onLongPress={drag} style={styles.dragHandle}>
                            <Ionicons name='menu-outline' size={22} />
                        </TouchableOpacity>

                        <ThemedText style={styles.listText}>{item.name}</ThemedText>

                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                            <Ionicons name='trash-outline' size={22} color={Colors.warning} />
                        </TouchableOpacity>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
                style={{ width: '100%' }}
            />
            </ThemedView>
        </ThemedView>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 50,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
    },
    listContainer: {
        width: '90%',
        marginTop: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Colors.white,
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    }, 
    activeItem: {
        backgroundColor: Colors.silver,
    },
    dragHandle: {
        marginRight: 10,
    },
    listText: {
        flex: 1,
        fontSize: 16,
        marginHorizontal: 10,
    },
})
