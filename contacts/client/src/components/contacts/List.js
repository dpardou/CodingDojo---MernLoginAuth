import { Link } from 'react-router-dom';
import { List, Row, Table } from 'reactstrap';
import {AiFillDelete, AiFillEdit, AiFillEye} from 'react-icons/ai';

const ContactList = (props) => {

    const eliminar = (e, id) => {
        e.stopPropagation();
        if(id) {
            props.eliminar(id);
        }
    }

    return <Row>
        <Table>
            <thead>
                <tr> 
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Edad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                { props.list && props.list.map((elem, i) => <tr key={i}>
                    <td>{elem.name}</td>
                    <td>{elem.email}</td>
                    <td>{elem.phone}</td>
                    <td>{elem.age}</td>
                    <td>
                        <Link to={`view/${elem._id}`} style={{margin:'5px'}}><AiFillEye/></Link>
                        <Link to={`edit/${elem._id}`} style={{margin:'5px'}}><AiFillEdit color='orange'/></Link>
                        <AiFillDelete color='red' onClick={e => eliminar(e, elem._id)} style={{margin:'5px'}}/>
                    </td>
                </tr>)}
            </tbody>
        </Table>
    </Row>;
}

export default ContactList;