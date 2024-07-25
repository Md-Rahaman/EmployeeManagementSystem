package com.gl.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.ems.dto.DepartmentDto;
import com.gl.ems.dto.EmployeeDto;
import com.gl.ems.service.EmployeeService;

@CrossOrigin("*")
@RequestMapping("/api/employees")
@RestController
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping
	ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
		EmployeeDto employee=employeeService.createEmployee(employeeDto);
		return new ResponseEntity<EmployeeDto>(employee,HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") int employeeId){
		EmployeeDto employee = employeeService.getEmployeeById(employeeId);
		return new ResponseEntity<EmployeeDto>(employee,HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	ResponseEntity<EmployeeDto> updateDepartmentById(@PathVariable("id") int empId,@RequestBody EmployeeDto  employeeDto)
	{
		EmployeeDto employee=employeeService.updateEmployeeById(empId, employeeDto);
		return new ResponseEntity<EmployeeDto>(employee,HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	ResponseEntity<EmployeeDto> deleteDepartmentById(@PathVariable("id") int empId){
		employeeService.deleteEmployeeById(empId);
		
		return new ResponseEntity("Employee deleted succesfully.",HttpStatus.OK);
	}
	
	
	@GetMapping
	ResponseEntity<List<EmployeeDto>> getAllEmployees(){
		List<EmployeeDto> employees=employeeService.getAllEmployees();
		return new ResponseEntity<List<EmployeeDto>>(employees,HttpStatus.OK);
	}

}
