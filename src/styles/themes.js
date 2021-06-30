import { createMuiTheme } from "@material-ui/core";
import { orange, green } from "@material-ui/core/colors";

export const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: orange[ 500 ]
        },
        secondary: {
            main: green[ 500 ]
        },
    },
    typography: {
        fontFamily: 'Open Sans, Arial',
    },
});