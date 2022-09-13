import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ItemDetail = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button className='m-1' variant="dark" onClick={handleShow}>
          Detalle del producto
        </Button>

        <Modal show={show} id={props.id} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='h5'>{props.title}</Modal.Title>
            <Modal.Title className='mx-4 h4'>  ${props.price}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img className='imgTam' src={props.src} alt="fotoproducto"></img>
          <p>{props.detail}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button className='' variant="dark" onClick={handleClose}>
              Cerrar
            </Button>
            <Button className='' variant="dark" onClick={handleClose}>
              Agregar al carrito
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}


export default ItemDetail;