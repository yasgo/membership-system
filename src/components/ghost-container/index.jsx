import { Row, Col, Container } from 'react-bootstrap'

const GhostContainer = (props) => (
    props.match ? (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="d-flex flex-column">
                        {props.children}
                    </div>
                </Col>
            </Row>
        </Container>
    ) : (
            props.children
        )
)

export default GhostContainer