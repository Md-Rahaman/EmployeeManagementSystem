import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteEmployee, listAllEmployees } from "./services/EmployeeService";
import { getAllDepartments } from "./services/DepartmentService";
import { Link, useHistory } from "react-router-dom";

type employee = {
    employeeId: number,
    firstName: string,
    lastName: string,
    email: string,
    departmentId: number
}


const ListEmployee = () => {

    let navigator = useHistory();
    let [employees, setEmployees] = useState<employee[]>([]);



    useEffect(() => getAllEmployees(), []);

    function getAllEmployees() {
        listAllEmployees()
            .then((response) => {
                console.log(response.data);
                setEmployees(response.data);
            })
            .catch((error) => console.log(error))
    }

    function removeEmployee(id: number) {
        deleteEmployee(id)
            .then((response) => {
                console.log(response);
                getAllEmployees();
            })
            .catch((error) => console.log(error))
    }

    return (<>
        <Container style={{ marginTop: "20px" }}>
            <Link to="/add-employee" className="btn btn-primary" style={{ marginBottom: "10px" }}>Add Employee</Link>

            <Table striped bordered hover>

                <thead>
                    <tr>

                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department Id</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp) =>
                            <tr>
                                <td>{emp.employeeId}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td>{emp.departmentId}</td>
                                <td>
                                    <button className="btn btn-info" style={{ marginRight: "5px" }}>Update</button>
                                    <button className="btn btn-danger" onClick={() => removeEmployee(emp.employeeId)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    </>)
}

export default ListEmployee;