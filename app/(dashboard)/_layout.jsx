import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons'

// Custom Layout Components
import { Colors } from '../../constants/Colors'

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
            <StatusBar style='auto' />
            <Tabs 
                screenOptions={{ 
                    headerShown: false, 
                    tabBarStyle: {
                        backgroundColor: theme.background,
                        paddingTop: 10,
                    },
                    tabBarActiveTintColor: theme.iconsFocused,
                    tabBarInactiveTintColor: theme.icons
                }}
            >
                <Tabs.Screen 
                    name='map' 
                    options={{ title: 'Map', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            size={25}
                            name={focused ? 'map' : 'map-outline'}
                            color={focused ? theme.iconsFocused : theme.icons}
                        />
                    )}} 
                />
                <Tabs.Screen 
                    name='create' 
                    options={{ title: 'Create', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            size={25}
                            name={focused ? 'car' : 'car-outline'}
                            color={focused ? theme.iconsFocused : theme.icons}
                        />
                    )}} 
                /> 
                <Tabs.Screen 
                    name='saved' 
                    options={{ title: 'Saved', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            size={25}
                            name={focused ? 'bookmark' : 'bookmark-outline'}
                            color={focused ? theme.iconsFocused : theme.icons}
                        />
                    )}} 
                />
            </Tabs>
        </>
    )
}

export default DashboardLayout
