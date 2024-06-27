import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Stack } from 'react-bootstrap';

interface formsInterface {}

const Forms : React.FunctionComponent<formsInterface> = () => {
  return (
    <Stack gap={2} className='col-md-5 mx-auto mt-12'>
      <h2 className='text-center'>Mi tienda</h2>
    <Form className='bg-slate-300 p-4'>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email para acceder" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label >Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre de cliente" />
        
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label >Direccion</Form.Label>
        <Form.Control type="text" placeholder="Direccion para futuras entregas" />
        
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label >Barrio</Form.Label>
        <Form.Control type="text" placeholder="especifica el barrio donde te encuentras" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Stack>
  );
}

export default Forms;