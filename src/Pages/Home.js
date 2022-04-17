import React from "react";
import { Button, Card, Container, Row, Spinner, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
      .get("https://jsonplaceholder.typicode.com/photos", )
      .then((response) => response.data.slice(0, 24))
      .then((res) => {
        if (res) setPhotos(res);
      })
      .catch((err) => console.log(err));
    }, 500);
   
  }, []);

  console.log(photos);

  const PhotsReady = () => {
    if (photos) {
      return photos.map((item) => (
    <Card key={item.id} style={{ width: '18rem' }} border={'secondary'}>
  <Card.Img variant="top" src={item.url} />
  <Card.Body>
    <Card.Title>Фотография №{item.id}</Card.Title>
    <Card.Text>
    {item.title}
    </Card.Text>
    <Button as={Link} to={`/photos/${item.id}`} href={`/photos/${item.id}`} variant="primary" >Подробности о картинке</Button>
  </Card.Body>
</Card>
      ));
    } else {
      return (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>);
    }
  };

  return (
    <>
      
      <Container >
      <h1>Home</h1>
      <Row xs={2} md={4} lg={'auto'} gap={3} className="space-between">
      
      <PhotsReady />
      
      
      </Row>
      </Container>
      
      
    </>
  );
}
