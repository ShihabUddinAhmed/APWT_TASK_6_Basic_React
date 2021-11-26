import React from 'react';
import { Link } from 'react-router-dom';
import Student from './Student.jsx';

const StudentList = () => {
    return(
        <div>
            <table className="table table-bordered">
                <Student name="Shihab Ahmed" />
                <Student name="Kajol Ahmed" />
                <Student name="Shahnaj Akter" />
                <Student name="Kumar Barua" />
            </table>
            <Link to="/student-list/details"><button className="btn btn-outline-dark">Details</button></Link>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default StudentList;