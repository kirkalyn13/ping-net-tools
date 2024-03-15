import { COLOR_LIGHT_PRIMARY, COLOR_PRIMARY_TEXT } from "../styles/Colors.styles"

export const getHeaderStyles = (title: string): any => {
    return {
        title,
        headerStyle: {
            backgroundColor: COLOR_LIGHT_PRIMARY,
        },
        headerTintColor: COLOR_PRIMARY_TEXT,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}