import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "16px",
  padding: "10px 20px",
  borderRadius: "8px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? "Темная тема" : "Светлая тема"}
        </Typography>
        <StyledButton onClick={toggleTheme}>
          Переключить на {isDarkMode ? "светлую" : "тёмную"} тему
        </StyledButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
