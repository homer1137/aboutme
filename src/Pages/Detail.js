import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Spinner, Container, Alert } from "react-bootstrap";

function Detail() {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [error, setError] = useState('Текс ошибки');
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        
        .then((res) => {
          if (res) setPhoto(res.data);
        })
        .catch((err) => {
          setShow(true);
          setError(err.toString());
        });
    }, 500);
  }, [id]);


  const OnePhoto = () => {
    if (photo) {
      return (
    <Card style={{width: 'auto'}}>
  <Card.Img variant="top" src={photo.url} />
  <Card.Body>
    <Card.Title>Фотография №{photo.id}</Card.Title>
    <Card.Text>
    <div>Заголовок: {photo.title}</div>
    <div>Url: {photo.url}</div>
    </Card.Text>
    <Button as={Link} to={`/`} href={`/`} variant="primary" >Вернуться на главную</Button>
  </Card.Body>
</Card>
      );
    } 
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Так! Возникла ошибка!</Alert.Heading>
          <p>
            {error}
          </p>
        </Alert>
      );
    }
    else {
      return (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>);
    }
  };

  return (
    <Container style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}  >
      <h2>Детальная карточка фотографии №{id}</h2>
      <OnePhoto/>
    </Container>
  );
}

export default Detail;
