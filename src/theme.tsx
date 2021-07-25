import { CSSProperties } from 'react'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'


// https://stackoverflow.com/a/64135466/1439168
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    padding: {
      thick: CSSProperties['paddingTop']
      default: CSSProperties['paddingTop']
      light: CSSProperties['paddingTop']
      extraLight: CSSProperties['paddingTop']
    }
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    padding?: {
      thick?: CSSProperties['paddingTop']
      default?: CSSProperties['paddingTop']
      light?: CSSProperties['paddingTop']
      extraLight?: CSSProperties['paddingTop']
    }
  }
}

export const palette = {
  primary: {
    light: '#c462fc',
    main: '#B32EFF',
    dark: '#7213a8',
    contrastText: 'white'
  },
  background: {
    default: '#F0F0F3',
    paper: '#F0F0F3'
  },
  action: {
    active: '#B32EFF',
    hover: '#c462fc',
    selected: '#B32EFF',
    disabled: 'rgba(5, 21, 36, 0.2)'
  },
  secondary: {
    main: 'rgba(70, 82, 92)',
    light: 'rgba(70, 82, 92, 0.2)'
  },
  success: {
    main: 'rgba(0, 167, 47)',
    light: 'rgba(0, 167, 47, 0.2)'
  },
  error: {
    main: 'rgba(197, 6, 2)',
    light: 'rgba(197, 6, 2, 0.12)'
  },
  info: {
    main: 'rgba(33, 114, 229)',
    light: 'rgba(33, 114, 229, 0.12)'
  },
  text: {
    primary: '#051524',
    secondary: '#46525C',
    disabled: 'rgba(5, 21, 36, 0.2)'
  }
}

const typography: TypographyOptions = {
  fontFamily: [
    'Nunito',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  h1: {
    fontSize: '8.2rem',
    fontWeight: 300
  },
  h2: {
    fontSize: '6.0rem',
    fontWeight: 300
  },
  h3: {
    fontSize: '4.1rem',
    fontWeight: 400
  },
  h4: {
    fontSize: '2.7rem',
    fontWeight: 700
  },
  h5: {
    fontSize: '2.4rem',
    fontWeight: 700
  },
  h6: {
    fontSize: '2.0rem',
    fontWeight: 700
  },
  subtitle1: {
    fontSize: '1.8rem',
    fontWeight: 700
  },
  subtitle2: {
    fontSize: '1.6rem',
    fontWeight: 700
  },
  body1: {
    fontSize: '1.4rem',
    fontWeight: 400
  },
  body2: {
    fontSize: '1.2rem',
    fontWeight: 400
  },
  button: {
    fontSize: '1.8rem',
    fontWeight: 700,
    textTransform: 'capitalize'
  }
}

const padding = {
  thick: '4.2rem',
  default: '2.8rem',
  light: '1.8rem',
  extraLight: '1.2rem'
}

const breakpoints = createBreakpoints({})

const theme = createMuiTheme({
  palette,
  padding,
  typography,
  breakpoints,
  overrides: {
    MuiTouchRipple: {
      rippleVisible: {
        color: 'rgba(247, 189, 181, 0.8)'
      }
    }
  }
})

export default theme