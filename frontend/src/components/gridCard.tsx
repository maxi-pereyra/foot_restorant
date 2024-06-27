import React from 'react';
import CardBasic from './ui/card';
import { Container , Row, Col} from 'react-bootstrap';
import data from '../utils/products.json';
import { InterfaceProducts } from '@/vite-env';


interface gridCardsInterface {}

const products: InterfaceProducts[] = data;

const GridCards: React.FunctionComponent<gridCardsInterface> = () => {
    
    
    return(
        <Container className='bg-slate-300 mt-10'>
            <Row md={'auto'}>
                {
                    products.map((product , index) => (
                        <Col key={index} className='flex justify-center m-4' >
                            <CardBasic product={product}></CardBasic>
                        </Col>
                    ))
                }
                
            </Row>
        </Container>
    )
}

export default GridCards;