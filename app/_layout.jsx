import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
        <StatusBar value='auto' />
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.background },
            headerTintColor: theme.title,
        }}>
            <Stack.Screen name='index' options={{ title: 'Home' }} />
            <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
        </Stack>
    </>
    )
}

export default RootLayout
