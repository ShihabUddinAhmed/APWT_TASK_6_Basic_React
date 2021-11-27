import React from 'react';
import { Link } from 'react-router-dom';

const Student = (props) => {
    return(
        <tr>
            <td><br />{props.name}</td>
            <td><br />{props.id}</td>
            <td><br />{props.passingyear}</td>
            <td><br />{props.cgpa}</td>
            <td><br /><Link to={['/student-list/',props.name,'/',props.id,'/',props.cgpa,'/',props.passingyear].join('')}><button className="btn btn-outline-dark">Details</button></Link></td>
        </tr>
    );
}

export default Student;