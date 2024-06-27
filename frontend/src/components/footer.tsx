import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

interface footerInterface {}

const Footer: React.FC<footerInterface> = () => {
  return (
    <Container fluid="xxl" className='h-auto my-4 py-4 bg-slate-300'>
      <Row>
        <Col className='flex flex-col justify-center items-center '>
            <h2>Mi tienda</h2>
            <div className='flex flex-col items-center w-3/4'>
                <p>Subscribete para mantenerte informado</p>
                <Form className='w-full'>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="nombre@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="nombre" />
                    </Form.Group>
                </Form>
            <Button className='w-full'>Inscribirse</Button>
                <p>Al proporcionar su dirección de correo electrónico, acepta nuestros Términos de servicio y Política de privacidad .</p>
            </div>
            <div className='flex justify-center mt-5'>
                <NavLink to={"/"}><FaFacebook className='mx-2 size-6' /></NavLink>
                <NavLink to={"/"}><BsInstagram className='mx-2 size-6'/></NavLink>
                <NavLink to={"/"}><FaTiktok className='mx-2 size-6 '/></NavLink>
            </div>
        </Col>
        <Col className='flex flex-col py-3'>
            <NavLink to={"/"} className=" py-1">Inscribite</NavLink>
            <NavLink to={"/"} className=" py-1">Nuestra comida</NavLink>
            <NavLink to={"/"} className=" py-1">Sobre nosotros</NavLink>
            <NavLink to={"/"} className=" py-1">Contactenos</NavLink>
            <NavLink to={"/"} className=" py-1">Reseñas y espacio para mejorar</NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;