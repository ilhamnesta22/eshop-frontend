import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';
import { getPrice } from '../utils';

function CartItem({item}){
    return (
    <Card className='p-3 mt-3'>
        <Row>
            <Col className='col-1'>
                <Card.Img src={item.image} />
            </Col>
            <Col className='col-10'>
                <Card.Title>Title Barang</Card.Title>
                <Card.Subtitle>{getPrice(item.price)}</Card.Subtitle>
                <Card.Text>qty : {item.quantity}</Card.Text>
            </Col>
            <Col className='col-1 d-flex justify-content-center align-items-center'>
            <Button>
                <MdDeleteForever />
            </Button>
            </Col>
        </Row>
    </Card>

    );
}

export default CartItem;