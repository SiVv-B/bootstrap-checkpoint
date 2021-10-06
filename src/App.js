// https://www.youtube.com/watch?v=8pKjULHzs0s
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';


function App() {
    return ( 
        <div className = "App" >
        <header className = "App-header" >

        <Container>
        <Row>
            <Col md>  
            <Form>
        <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type = "email" placeholder ="Example@email.com"></Form.Control>
        </Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder ="Password"></Form.Control>
        </Form>
            </Col>
        </Row>
        <Card className="card1" style={{color:'black'}}>
        <Card.Img src="https://la-parenthese-enchantee.fr/8134-home_default/card-this-is-a-fish-for-you.jpg" />
        <Card.Body>
        <Card.Title>
        Card Example
        </Card.Title>
        <Card.Text>
            This is an Example of react bootdtrap cards.
        </Card.Text>
        <Button variant = "primary" > Read more </Button> 
        </Card.Body>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item > Test < /Breadcrumb.Item>  
        <Breadcrumb.Item > Test2 < /Breadcrumb.Item>    
        <Breadcrumb.Item > Test3 < /Breadcrumb.Item>   
        </Breadcrumb> 
        <Alert variant = "warning" > This is a button! < /Alert> 
        <Button > Test Button < /Button>   

        </Container>
        </header >
        </div>
    );
}

export default App;