import { createTheme, PaletteMode } from '@mui/material/styles';

// Purple-themed gradients
const lightGradients = {
  primary: 'linear-gradient(135deg, #BA68C8 0%, #E1BEE7 100%)',
  secondary: 'linear-gradient(135deg, #9C27B0 0%, #CE93D8 100%)',
  success: 'linear-gradient(135deg, #81C784 0%, #A5D6A7 100%)',
  info: 'linear-gradient(135deg, #64B5F6 0%, #90CAF9 100%)',
  warning: 'linear-gradient(135deg, #FFB74D 0%, #FFCC80 100%)',
  card: 'linear-gradient(to right bottom, #F3E5F5, #EDE7F6)',
  header: 'linear-gradient(120deg, #EDE7F6, #D1C4E9)',
};

const darkGradients = {
  primary: 'linear-gradient(135deg, #7E57C2 0%, #4A148C 100%)',  // Softened purple gradient
  secondary: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',  // Matching secondary
  success: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
  info: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)',
  warning: 'linear-gradient(135deg, #E65100 0%, #BF360C 100%)',
  card: 'linear-gradient(to right bottom, #2A094E, #1A0D35)',     // Darker base for cards
  header: 'linear-gradient(120deg, #4527A0, #512DA8)',             // Richer header gradient
};

// Existing type declarations remain the same
declare module '@mui/material/styles' {
  interface Theme {
    gradients: {
      primary: string;
      secondary: string;
      success: string;
      info: string;
      warning: string;
      card: string;
      header: string;
    };
  }
  
  interface ThemeOptions {
    gradients?: {
      primary?: string;
      secondary?: string;
      success?: string;
      info?: string;
      warning?: string;
      card?: string;
      header?: string;
    };
  }
}

// Other component extensions remain the same
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    gradient: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    gradient: true;
  }
}

export const theme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    ...(mode === 'light' 
      ? {
          // Light purple theme
          primary: {
            main: '#BA68C8',
            light: '#E1BEE7',
            dark: '#9C27B0',
          },
          secondary: {
            main: '#9C27B0',
            light: '#CE93D8',
            dark: '#7B1FA2',
          },
          background: {
            default: '#F3E5F5',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#4A148C',
            secondary: '#6A1B9A',
          },
        }
      : {
        // Dark purple theme (updated)
        primary: {
          main: '#7E57C2',    // Softer main purple
          light: '#9C27B0',
          dark: '#4A148C',
        },
        secondary: {
          main: '#9C27B0',
          light: '#CE93D8',
          dark: '#7B1FA2',
        },
        background: {
          default: '#2A094E',  // Darker base background
          paper: '#3F1B6D',    // Better contrast with text
        },
        text: {
          primary: '#EDE7F6',
          secondary: '#B39DDB',  // Softer secondary text
        },
      }),
  },
  gradients: mode === 'light' ? lightGradients : darkGradients,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: mode === 'light' ? '#4A148C' : '#EDE7F6',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: mode === 'light' ? '#6A1B9A' : '#D1C4E9',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: mode === 'light' ? '#9C27B0' : '#CE93D8',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: mode === 'light' ? '#6A1B9A' : '#D1C4E9',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
      variants: [
        {
          props: { variant: 'gradient', color: 'primary' },
          style: {
            background: mode === 'light' ? lightGradients.primary : darkGradients.primary,
            color: mode === 'light' ? '#4A148C' : '#EDE7F6',
            '&:hover': {
              opacity: 0.9,
              boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
            },
          },
        },
        {
          props: { variant: 'gradient', color: 'secondary' },
          style: {
            background: mode === 'light' ? lightGradients.secondary : darkGradients.secondary,
            color: mode === 'light' ? '#4A148C' : '#EDE7F6',  // Added proper color contrast
            '&:hover': {
              opacity: 0.9,
              boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: mode === 'light' 
            ? '0 4px 6px rgba(106, 27, 154, 0.1)' 
            : '0 4px 6px rgba(106, 27, 154, 0.3)',  // Purple-tinged shadow
        },
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: mode === 'light' ? lightGradients.card : darkGradients.card,
          },
        },
      ],
    },
    MuiAppBar: {
      variants: [
        {
          props: { color: 'gradient' },
          style: {
            background: mode === 'light' ? lightGradients.header : darkGradients.header,
            color: mode === 'light' ? '#4A148C' : '#EDE7F6',
          },
        },
      ],
    },
  },
});