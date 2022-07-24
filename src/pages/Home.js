import React from "react";
import CardList from "../components/CardList";
import { Container } from "react-bootstrap";

function Home(){
    return (
       <Container>
        <h1>Halaman Utama</h1>
        <CardList />
       </Container>
    );
};

export default Home;