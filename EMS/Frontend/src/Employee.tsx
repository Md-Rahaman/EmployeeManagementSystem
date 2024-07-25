import { FormEvent, useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { getAllDepartments } from "./services/DepartmentService";
import { createEmployee } from "./services/EmployeeService";
import { useHistory } from "react-router-dom";

type employee = {
    employeeId: number,
    firstName: string,
    lastName: string,
    email: string,
    departmentId: number
}

type department = {
    deptId: number,
    deptName: string,
    deptDescription: string
}


const Employee = () => {

    let [departments, setDepartment] = useState<department[]>([])

    const navigator = useHistory();
    useEffect(() => listAllDepartment(), []);

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    })

    function validateForm() {
        let flag = true;
        const errorsCopy = { ...errors };
        console.log(errorsCopy);

        if (firstName.trim())
            errorsCopy.firstName = "";
        else {
            errorsCopy.firstName = "First Name Is Required";
            flag = false;
        }

        if (lastName.trim())
            errorsCopy.lastName = "";
        else {
            errorsCopy.lastName = "Last Name Is Required";
            flag = false;
        }

        if (email.trim())
            errorsCopy.email = "";
        else {
            errorsCopy.email = "Email Is Required";
            flag = false;
        }

        if (departmentId)
            errorsCopy.department = "";
        else {
            errorsCopy.department = "Department Is Required";
            flag = false;
        }

        setErrors(errorsCopy);
        return flag;

    }

    function listAllDepartment() {

        getAllDepartments()
            .then((response) => {
                console.log(response.data);
                setDepartment(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function saveOrUpdateEmployee(e: FormEvent) {

        e.preventDefault();

        if (validateForm()) {

            const emp1 = { firstName, lastName, email, departmentId };

            console.log(emp1);
            createEmployee(emp1)
                .then((response) => {
                    console.log(response.data);
                    navigator.push("/employee")
                })
                .catch((err) => console.log(err))
        }
    }

    let [firstName, setFirstName] = useState<string>("");
    let [lastName, setLastName] = useState<string>("");
    let [email, setEmail] = useState<string>("");
    let [departmentId, setDepartmentId] = useState<number>();

    return (<>
        <Container style={{ marginTop: "50px" }}>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Employee First Name"
                        value={firstName}
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {
                        errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>
                    }
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Employee Last Name"
                        value={lastName}
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {
                        errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>
                    }
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Employee Email Id"
                        value={email}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {
                        errors.email && <div className="invalid-feedback">{errors.email}</div>
                    }
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Select Department</Form.Label>
                    <Form.Select aria-label="Select Department"
                        className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                        onChange={(e) => setDepartmentId(Number(e.target.value))}>
                        <option>Select Department</option>

                        {
                            departments.map((dept) =>
                                <option value={dept.deptId}>{dept.deptName}</option>)
                        }
                    </Form.Select>
                    {
                        errors.department && <div className="invalid-feedback">{errors.department}</div>
                    }
                </Form.Group>

                <Button variant="primary" type="submit"
                    onClick={saveOrUpdateEmployee}>
                    Submit
                </Button>
            </Form>
        </Container>
    </>)
}

export default Employee;