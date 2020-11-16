import { Row, Col, Container } from 'react-bootstrap'

import Login from '../pages/Login'
import Register from '../pages/Register'
import MultipleContent from '../components/multiple-content'

const Splash = () => {

    const contents = [
        {
            title: 'Giriş Yap',
            content: Login
        },
        {
            title: 'Üye Ol',
            content: Register
        }
    ]

    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <MultipleContent contents={contents} />
                </Col>
            </Row>
        </Container>
    )
}

export default Splash