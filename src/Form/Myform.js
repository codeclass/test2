import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Row, Col, Table} from 'react-bootstrap'
import InputMask from 'react-input-mask';

export const Myform = () => {

    const [form, setForm] = useState({
        fio: '',
        adress: '',
        phone: '',
        email: '',
        fioerror: false,
        adresserror: false,
        phoneerror : false,
        emailerror : false,
        formdisplay: true,
        resultdisplay: false
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value,
            fioerror: false, adresserror: false, phoneerror: false, emailerror: false
        });
    }

    const submitButton = async (e) => {
        e.preventDefault()

        //try {
            const response = await fetch("http://localhost:80/form.php", {
                method: "POST",
                body: JSON.stringify(form)
            });
            const responseText = await response.text();
            setForm(JSON.parse(responseText))
        //} catch (ex) {

          //  console.error("GET error!");
        //}


    }


    return (
        <div>
    {form.formdisplay ? (
        <Form className='container mt-3 mb-3'>
            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <Form.Control
                    className="name-input m-2"
                    type="text"
                    placeholder="Ф.И.О."
                    name="fio"
                    onChange={handleChange}
                    isInvalid={!!form.fioerror}
                />
                <Form.Control.Feedback type="invalid" className="m-2">
                    {form.fioerror}
                </Form.Control.Feedback>
                <Form.Control
                    className="adress-input m-2"
                    type="text"
                    placeholder="Адрес"
                    name="adress"
                    onChange={handleChange}
                    isInvalid={!!form.adresserror}
                />
                <Form.Control.Feedback type="invalid" className="m-2">
                    {form.adresserror}
                </Form.Control.Feedback>
                <InputMask
                    mask="+7 999 999 99 99"
                    className="form-control phone-input m-2"
                    type="text"
                    placeholder="Телефон"
                    name="phone"
                    onChange={handleChange}
                    isInvalid={!!form.phoneerror}
                />
                <Form.Control.Feedback type="invalid" className="m-2">
                    {form.phoneerror}
                </Form.Control.Feedback>
                <Form.Control
                    className="email-input m-2"
                    type="text"
                    placeholder="E-Mail"
                    name="email"
                    onChange={handleChange}
                    isInvalid={!!form.emailerror}
                />
                <Form.Control.Feedback type="invalid" className="m-2">
                    {form.emailerror}
                </Form.Control.Feedback>
                <Button
                    className="submit-button m-2"
                    value="submit"
                    type="submit"
                    onClick={submitButton}>
                    Отправить
                </Button>

            </Form.Group>
        </Form>
        ) : ''
    }
    {form.resultdisplay ? (
        <Row className="">
            <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>Поле</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Ф.И.О</td>
                        <td>{form.fio}</td>
                    </tr>
                    <tr>
                        <td>Адрес</td>
                        <td>{form.adress}</td>
                    </tr>
                    <tr>
                        <td>Телефон</td>
                        <td>{form.phone}</td>
                    </tr>
                    <tr>
                        <td>E-Mail</td>
                        <td>{form.email}</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    ) : ''}
        </div>
    )
}