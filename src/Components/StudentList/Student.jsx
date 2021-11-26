import React from 'react';

const Student = (props) => {
    return(
        <tr>
            <td><br />{props.name}</td>
            <td><br />{props.id}</td>
            <td><br />{props.passingyear}</td>
            <td><br />{props.cgpa}</td>
        </tr>
    );
}

export default Student;