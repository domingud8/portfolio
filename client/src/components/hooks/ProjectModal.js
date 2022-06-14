import { useEffect, useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectModal(props) {
    const path = "icons8_skills/" + props.deploySite + ".png";
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="example-modal-sizes-title-lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    style={{ color: "#3f0f64" }}
                    id="contained-modal-title-vcenter"
                >
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: "#3f0f64", fontSize: "22px" }}>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <p> {props.extended} </p>
                            {props.features ? (
                                <p>
                                    {" "}
                                    Features:
                                    <ul>
                                        {props.features.map(
                                            (feature, index) => (
                                                <li key={index}> {feature}</li>
                                            )
                                        )}
                                    </ul>
                                </p>
                            ) : (
                                ""
                            )}
                            <Button type="button" className="btn btn-primary ">
                                <a
                                    className="btn btn-primary"
                                    href={props.github}
                                    role="button"
                                    target="_blank"
                                >
                                    Source Code in Github
                                </a>
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            {props.technologies ? (
                                <p>
                                    {" "}
                                    <p>Libraries & Frameworks:</p>
                                    <ul className="list-skills ">
                                        {props.technologies.map(
                                            (tech, index) => (
                                                <li key={index}>
                                                    {" "}
                                                    <div className="feature-item">
                                                        {" "}
                                                        {tech}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </p>
                            ) : (
                                ""
                            )}
                            {props.deploySite ? (
                                <div>
                                    <p>Deployed on:</p>{" "}
                                    <div className="feature-item  d-flex flex-row justify-content-center align-items-center">
                                        <div>
                                            <img
                                                style={{
                                                    marginRight: "8px",
                                                    marginTop: "0",
                                                    paddingTop: "0",
                                                    maxWidth: "100px",
                                                    maxHeight: "100px",
                                                }}
                                                src={path}
                                            />
                                        </div>
                                        <div>
                                            {props.deploySite}

                                            <a
                                                target="_blank"
                                                href={props.projectUrl}
                                            >
                                                {" "}
                                                link
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
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
