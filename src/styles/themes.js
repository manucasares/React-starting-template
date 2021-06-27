import { createMuiTheme } from "@material-ui/core";
import { orange, green } from "@material-ui/core/colors";

export const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: orange[ 500 ],
            contrastText: '#fff',
        },
        secondary: {
            main: green[ 500 ],
            contrastText: '#fff',
        },
        light: {
            main: "#fff"
        }
    },
    typography: {
        fontFamily: 'Roboto, Arial',
        /*  Valores aceptados por MUI:
            h1-h2-h3-h4-h5-h6-subtitle1-subtitle2-body1-body2-button-caption-overline
        */
        h3: {
            // Fluid font sizes
            fontSize: 'clamp(5px, 3vw, 20px)',
            // Acá se pueden agregar todos los estilos que queramos
            color: '#ff0000',
        }
    },
});