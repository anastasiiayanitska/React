/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { TextField, Card, CardContent } from "@mui/material";
import styled from '@emotion/styled'
import { css } from '@emotion/react'


  const theme = createTheme({
    palette: {
      mode: "dark", 
    },
  });
  
  const StyledButton = styled("button")`
    background-color: #ba0f30;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    margin: 10px;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      background-color: #ff2511;
    }
  `;
  
  const inputStyles = css`
    margin: 10px;
    width: 200px;
     `;
  
  const cardStyles = css`
    margin-top: 20px;
    text-align: center;
    background-color:rgba(198, 183, 155, 0.2);
  `;
export default function App() {
    const [text, setText] = useState("");
    const [displayText, setDisplayText] = useState("");
  
    const handleButtonClick = () => {
      setDisplayText(text);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <TextField
            label="Введите текст"
            variant="outlined"
            css={inputStyles}
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor:"#ba0f30", // Цвет бордера
                },
                "&:hover fieldset": {
                  borderColor: "#ff2511", // Цвет бордера при ховере
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ff2511", // Цвет бордера при фокусе
                },
              },
              "& .MuiInputLabel-root": {
                color: "#ba0f30", // Цвет лейбла
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#ff2511", // Цвет лейбла при фокусе
              },
            }}
          />
          <StyledButton onClick={handleButtonClick}>Отобразить текст</StyledButton>
          {displayText && (
            <Card css={cardStyles}>
              <CardContent>{displayText}</CardContent>
            </Card>
          )}
        </div>
      </ThemeProvider>
    );
  }
  
