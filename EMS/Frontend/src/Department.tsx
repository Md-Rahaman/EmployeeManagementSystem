import { FormEvent, useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { createDepartment, getDepartmentById, updateDepartment } from "./services/DepartmentService";


interface RouteParam {
    id: string;
}
const Department = () => {
    let [deptName, setDepartmentName] = useState<string>("");
    let [deptDescription, setDepartmentDescription] = useState<string>("");

    const navigator = useHistory();

    const { id } = useParams<RouteParam>();

    useEffect(() => getDepartment(), [id])

    function getDepartment() {
        getDepartmentById(Number(id))
            .then((response) => {
                console.log(response.data);
                setDepartmentName(response.data.deptName);
                setDepartmentDescription(response.data.deptDescription);
            })
            .catch((err) => { console.log(err); })
    }

    function saveOrUpdateData(e: FormEvent) {
        e.preventDefault();
        const department = { deptName, deptDescription };
        console.log(department);

        if (id) {
            updateDepartment(Number(id), department)
                .then((response) => {
                    console.log(response.data);
                    navigator.push("/department")
                })
                .catch((err) => console.log(err))
        }
        else {
            createDepartment(department)
                .then((response) => {
                    console.log(response.data);
                    navigator.push("/department")
                })
                .catch((err) => console.log(err))
        }
    }

    function changeTitle() {
        if (id)
            return (<h1 style={{ textAlign: "center" }}>Update Department</h1>)
        else
            return (<h1 style={{ textAlign: "center" }}>Create Department</h1>)
    }
    return (<>
        {changeTitle()}
        <Container style={{ marginTop: "50px" }}>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Department Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Department Name"
                        value={deptName}
                        onChange={(e) => setDepartmentName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Department Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Department Description"
                        value={deptDescription}
                        onChange={(e) => setDepartmentDescription(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={saveOrUpdateData}>
                    Submit
                </Button>
            </Form>
        </Container>
    </>)
}

export default Department;