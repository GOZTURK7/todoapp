import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Note from "./note";

const Notes = ({data, removeNote}) => {

    let keyId = 0;

  return (
  
        <Container>
            <Row className="g-5">
                {
                    data.map(item =>( 
                    <Col key={item.id+(keyId)} md={4}>
                        <Note note={item} onRemoveNote={removeNote}/>
                    </Col>
                   ))
                }
               
            </Row>
        </Container>
  
    )
};

export default Notes;
