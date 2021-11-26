import React from 'react';
import Student from './Student';

const StudentDetails = () => {
    return(
        <div>
            <table className="table table-bordered">
                <tr>
                    <th>Student Name</th>
                    <th>Student Id</th>
                    <th>Passing Year</th>
                    <th>CGPA</th>
                </tr>
                <Student name="Shihab Ahmed" id="18-38960-3" passingyear="2022" cgpa="3.54" />
                <Student name="Kajol Ahmed" id="18-33648-3" passingyear="2022" cgpa="2.94" />
                <Student name="Shahnaj Akter" id="18-39875-3" passingyear="2022" cgpa="4.00" />
                <Student name="Kumar Barua" id="18-30222-3" passingyear="2022" cgpa="3.33" />
            </table>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default StudentDetails;