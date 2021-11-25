import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Row, Form, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import Swal from 'sweetalert2';

const initialState = {
    name: '',
    email: '',
    phone: '',
    age: 0
}

const ContactForm = props => {

    const [inputs, setInputs] = useState(initialState);

    const navigate = useNavigate();
    const { id } = useParams();

    const actualizarValor = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value 
        });
    }

    const volver = e => {
        e.stopPropagation();
        navigate('../')
    }

    const guardar = e => {
        e.preventDefault();
        const data = {...inputs};
        data._id = id;
        props.accion(data);
    }

    useEffect(() => {
        if(id) {
            axios.get(`/api/contact/${id}`)
            .then(resp => setInputs(resp.data.data))
            .catch(error => Swal.fire('Error', 'Error al obtener el contacto, inténtelo mas tarde', 'error'));
        }
    }, [])

    return <Row>
        <h1>{props.edicion?'Editando al contacto:' + inputs?.name: props.ver?'Visualizando al contacto' + inputs?.name :'Creando un nuevo contacto'}</h1>

        <Form onSubmit={guardar}>
            <Row>
                <Col xs={12}>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input type="text" name="name" value={inputs.name} onChange={actualizarValor} required minLength={3} disabled={props.ver}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="email" value={inputs.email} onChange={actualizarValor} required disabled={props.ver}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Teléfono</Label>
                        <Input type="text" name="phone" value={inputs.phone} onChange={actualizarValor} disabled={props.ver}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Edad</Label>
                        <Input type="number" name="age" value={inputs.age} onChange={actualizarValor} required min={0} max={120} disabled={props.ver}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                   {props.accion && <Button type="submit">Guardar</Button>}
                </Col>
                <Col xs={3}>
                    <Button type="button" onClick={volver}>Volver</Button>
                </Col>
            </Row>
        </Form>
    </Row>

}

export default ContactForm;