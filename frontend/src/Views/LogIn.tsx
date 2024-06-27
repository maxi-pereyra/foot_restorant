import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

import { Container , Row , Col} from 'react-bootstrap';

interface LogInInterface {}

const LogIn: React.FunctionComponent<LogInInterface> = () => {
  return (
    <Container className='h-screen'>
        <Row className='h-full '>
            <Col>
                Imagen
            </Col>
            
             <Col className='flex flex-col justify-center'>
                <Form className='bg-slate-300 p-4'>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email para acceder" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div className='flex flex-col'>
                    <NavLink to={"/form"}>crear una cuenta</NavLink>
                    <Button variant="primary" type="submit" className='mt-2'>
                        Submit
                    </Button>
                </div>
                </Form>
            </Col>
    </Row>
    </Container>
  )
}

export default LogIn