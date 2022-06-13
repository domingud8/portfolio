import { useEffect, useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="example-modal-sizes-title-lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            .col-xs-12 .col-md-8
                            <p> {props.extended} </p>
                            <Button type="button" className="btn btn-primary ">
                                <a
                                    className="btn btn-primary"
                                    href={props.github}
                                    role="button"
                                >
                                    <i
                                        style={{ width: "100" }}
                                        className="fa fa-github fa-3x "
                                    ></i>
                                    Source Code
                                </a>
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                            <p>Features</p>
                            <p>Library & Frameworks</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
