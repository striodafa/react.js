import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';  
import './'

const Formulir = ({ namaPeminjam, namaBuku, tanggalKeluar, tanggalMasuk, handleChange, handleSubmit,id }) => {
    return (
        <div className='mt-5'>
            <Row>
                <Col>
                    <h4>{id ? "edit data":"Tambah Data"}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 form-container" controlId="nama">
                            <Form.Label className='form-label'>Nama peminjam</Form.Label>
                            <Form.Control
                                type="text"
                                name="namaPeminjam"
                                value={namaPeminjam}
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group className="mb-3 form-container" controlId="namaBuku">
                            <Form.Label className='form-label'>Nama Buku</Form.Label>
                            <Form.Control
                                type="text"
                                name="namaBuku"
                                value={namaBuku}
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="tanggalKeluar">
                            <Form.Label>Tanggal (kalender) keluar</Form.Label>
                            <Form.Control
                                type="date"
                                name='tanggalKeluar'
                                value={tanggalKeluar}
                                onChange={(event) => handleChange(event)} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="tanggalMasuk">
                            <Form.Label>Tanggal (kalender) masuk</Form.Label>
                            <Form.Control
                                type="date"
                                name="tanggalMasuk"
                                value={tanggalMasuk}
                                onChange={(event) => handleChange(event)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>

    );
}

export default Formulir;