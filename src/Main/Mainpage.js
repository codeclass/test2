import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Mainpage = () => {

    return (
        <div>
            <h1>Главная страница</h1>
            <Row>
                <Col>Блок с новостями</Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/news">Все новости</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/contacts">Обратная связь</Link>
                </Col>
            </Row>
        </div>
    );

}