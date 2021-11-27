import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
    const {name} = useParams();
    const {id} = useParams();
    const {cgpa} = useParams();
    const {pass} = useParams();
    return(
        <div>
            <h1>Student Details</h1>
            <p>
            <br /><br /><br /><br /><br />
                <strong>Name: {name}</strong><br />
                <strong>Student ID: {id}</strong><br />
                CGPA: {cgpa}<br />
                Passing Year: {pass}<br />

            </p>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default StudentDetails;