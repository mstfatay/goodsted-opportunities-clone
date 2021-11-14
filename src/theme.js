import {createTheme} from '@material-ui/core';

import PoppinsRegular from './fonts/Poppins-Regular.ttf';
import PoppinsBold from './fonts/Poppins-Bold.ttf';
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf';

const theme = createTheme({
    palette: {
      primary: {
        main: "#DB6D46",
        soft: "#F7E3DB",
      },
      secondary: {
        main: "#00A4A6",
      },
      completed: {
        main: "rgb(72, 162, 165)",
      },
      inProgress: {
        main: "rgb(0, 150, 234)",
      }
    },
    typography:{
      fontFamily: "Poppins-Regular",
      fontWeight: "normal",
      lineHeight: 1.43,
      h1:{
        fontFamily: "Poppins-Bold",
        fontWeight: 400,
        fontSize: "36px",
        lineHeight: 1.167,
        letterSpacing: 0,
      },
      body2:{
        fontFamily: "Poppins-Regular",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: 1.43,
      }
    },
  
    breakpoints: {
      values: {
        xs: 0,
        sm: 525,
        md: 960,
        lg: 1172,
        xl: 1920
      }
    },
  
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [
            {
              fontFamily: 'Poppins-Regular',
              fontStyle: 'normal',
              src: `local("Poppins-Regular"), url(${PoppinsRegular}) format('truetype')`,
            },
            {
              fontFamily: 'Poppins-Bold',
              fontStyle: 'normal',
              src: `local("Poppins-Bold"), url(${PoppinsBold}) format('truetype')`,
            },
            {
              fontFamily: 'Poppins-SemiBold',
              fontStyle: 'normal',
              src: `local("Poppins-SemiBold"), url(${PoppinsSemiBold}) format('truetype')`,
            }
          ],
          a:{
            textDecoration: "none",
          }
        },
      },  
    },
  
  });

export default theme;