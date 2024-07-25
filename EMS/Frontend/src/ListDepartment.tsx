import { useEffect, useState } from "react"
import { deleteDepartment, getAllDepartments } from "./services/DepartmentService";
import { Alert, Container, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

type department = {
    deptId: number,
    deptName: string,
    deptDescription: string
}

const ListDepartment = () => {

    let [departments, setDepartment] = useState<department[]>([]);
    let [error, setError] = useState<string>("");

    useEffect(() => listAllDepartment(), [])

    let navigator = useHistory();

    function listAllDepartment() {
        setError("");
        getAllDepartments()
            .then((response) => {
                console.log(response.data);
                setDepartment(response.data);
            })
            .catch((err) => {
                console.log(err);
            })


    }

    function updateDepartment(id: number) {
        setError("");
        navigator.push(`/edit-department/${id}`);
    }

    function removeDepartment(id: number) {
        deleteDepartment(id)
            .then((response) => {
                console.log(response)
                navigator.push("/department")
            })
            .catch((err) => {
                console.log(err)
                setError("Cannot Deleted Department With " + id + " as Employee are Associated With It");

            })
    }
    return (<>
        <Container style={{ marginTop: "20px" }}>
            <Link to="/add-department" className="btn btn-primary" style={{ marginBottom: "10px" }}>Add Department</Link>
            {error && (
                <Alert key="danger" variant="danger">
                    {error}
                </Alert>
            )}
            <Table striped bordered hover>

                <thead>
                    <tr>

                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        departments.map((dept) =>
                            <tr>
                                <td>{dept.deptId}</td>
                                <td>{dept.deptName}</td>
                                <td>{dept.deptDescription}</td>
                                <td>
                                    <button onClick={() => updateDepartment(dept.deptId)}
                                        className="btn btn-info" style={{ marginRight: "5px" }}>Update</button>
                                    <button onClick={() => removeDepartment(dept.deptId)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </Container>

    </>)
}

export default ListDepartment;