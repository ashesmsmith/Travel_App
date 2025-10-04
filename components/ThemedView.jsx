import { useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, ...props} ) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <SafeAreaView
            style={[{ backgroundColor: theme.background }, style]}
            {...props}
        />
    )
}

export default ThemedView
