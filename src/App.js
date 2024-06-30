// src/App.j
//import app.css

import "./App.css";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./Components/Description";
import Image from "./Components/Image";
import product from "./Products/product";

const App = () => {
  const firstName = "Chris "; // Add your first name here or leave it empty

  console.log("product:", product); // Add console.log statement for debugging

// Add your code here
  return (
    <Container className="my-5 App">
      <Card className="App-header">
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text><Price /></Card.Text>
          <Card.Text><Description /></Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-4">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img
              src="../public/logo512.png"
              alt="React logo"
              style={{ width: "100px", height: "100px" }}
              
            />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
};

export default App;
