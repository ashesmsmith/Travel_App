// Imports
import { useColorScheme, Image } from 'react-native'
import LightLogo from '../assets/img/logo-light.png'
import DarkLogo from '../assets/img/logo-dark.png'

// Themed Logo Component - Light/Dark Mode
const ThemedLogo = () => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image source={logo} resizeMode={'contain'} />
    )
}

export default ThemedLogo
