import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

function Forum() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '' && username.trim() !== '') {
      const formattedMessage = `${username}: ${newMessage}`;
      setMessages([...messages, formattedMessage]);
      setNewMessage('');
    }
  };

  return (
    <Container className="mt-5">
      <h1>React Forum</h1>
      <ListGroup>
        {messages.map((message, index) => (
          <ListGroup.Item key={index}>{message}</ListGroup.Item>
        ))}
      </ListGroup>
      
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group controlId="usernameInput">
          <Form.Control
            type="text"
            placeholder="Enter your username..."
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="messageInput">
          <Form.Control
            type="text"
            placeholder="Write your message..."
            value={newMessage}
            onChange={handleInputChange}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Forum;
