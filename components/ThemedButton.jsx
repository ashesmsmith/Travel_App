import { Pressable, Text, StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedButton = ({ style, children, ...props} ) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <Pressable 
        style={({ pressed }) => [
            styles.btn, 
            { backgroundColor: theme.buttonBackground },
            pressed && styles.pressed, 
            style
        ]} 
        {...props}
        >
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: theme.buttonText }}>{children}</Text>
        </Pressable>
        
    )
    }

    const styles = StyleSheet.create({
    btn: {
        padding: 15,
        borderRadius: 5,
        marginVertical: 10
    },
    pressed: {
        opacity: 0.5
    },
})

export default ThemedButton
