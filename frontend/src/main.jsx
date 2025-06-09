import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store'; 
import './index.css';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f9f9f9',
      paper: '#ffffff'
    },
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#ff4081'
    },
    text: {
      primary: '#212121',
      secondary: '#757575'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  shape: {
    borderRadius: 12
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
