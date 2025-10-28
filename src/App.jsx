import React from "react";
import "./styles/main.scss";
import Button from "./components/button/Button";
import Typography from "./components/typography/Typography";
import Container from "./components/container/Container";

function App() {
  return (
    <Container size="md">
      <Typography variant="h1">Mobile UI Toolkit</Typography>
      <Typography variant="p">Design UI system quick, sync & prettier.</Typography>
      
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </Container>
  )
}

export default App
