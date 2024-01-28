import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GaleriSayfasi = () => {
  const [fotograflar, setFotograflar] = useState([]);
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [fotoUrl, setFotoUrl] = useState('');

  const fotografEkle = () => {
    if (kullaniciAdi && fotoUrl) {
      const yeniFotograf = {
        kullaniciAdi,
        fotoUrl,
        begenmeSayisi: 0,
      };

      setFotograflar([...fotograflar, yeniFotograf]);
      setKullaniciAdi('');
      setFotoUrl('');
    }
  };

  const begen = (index) => {
    const yeniFotograflar = [...fotograflar];
    yeniFotograflar[index].begenmeSayisi += 1;
    setFotograflar(yeniFotograflar);
  };

  const fotografSil = (index) => {
    const yeniFotograflar = [...fotograflar];
    yeniFotograflar.splice(index, 1);
    setFotograflar(yeniFotograflar);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <Form>
            <Form.Group controlId="kullaniciAdi">
              <Form.Label>Kullanıcı Adı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kullanıcı Adınızı Girin"
                value={kullaniciAdi}
                onChange={(e) => setKullaniciAdi(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="fotoUrl">
              <Form.Label>Fotoğraf URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fotoğrafınızın URL'sini Girin"
                value={fotoUrl}
                onChange={(e) => setFotoUrl(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button variant="primary" onClick={fotografEkle}>
              Fotoğraf Ekle
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <Row>
            {fotograflar.map((foto, index) => (
              <Col key={index} md={4} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={foto.fotoUrl} />
                  <Card.Body>
                    <Card.Title>{foto.kullaniciAdi}</Card.Title>
                    <Card.Text>
                      Beğeni Sayısı: {foto.begenmeSayisi}
                    </Card.Text>
                    <Button variant="primary" onClick={() => begen(index)}>
                      Beğen
                    </Button>
                    <Button
                      variant="danger"
                      className="ml-2"
                      onClick={() => fotografSil(index)}
                    >
                      Sil
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GaleriSayfasi;
