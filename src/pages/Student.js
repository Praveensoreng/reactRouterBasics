import React from "react";
import './student.css'
function Student(){
    return(
        <>
        <h1>Student Record</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Roll no</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>Ankur Gupta</td>
                <td>3202</td>
                <td>B.Tech</td>
            </tr>
            <tr>
                <td>Piyush Sinha</td>
                <td>3245</td>
                <td>BCA</td>
            </tr>
            <tr>
                <td>Tarun</td>
                <td>3247</td>
                <td>BBA</td>
            </tr>
            <tr>
                <td>Harsh Vardhan</td>
                <td>3278</td>
                <td>Pharmacy</td>
            </tr>
        </table>
        </>
    );
}
export default Student;