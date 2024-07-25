package com.gl.ems.service;

import java.util.List;

import com.gl.ems.dto.EmployeeDto;

public interface EmployeeService {
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	EmployeeDto getEmployeeById( int empId);
	EmployeeDto updateEmployeeById(int empId,EmployeeDto employeeDto);
	void deleteEmployeeById(int empId);
	List<EmployeeDto> getAllEmployees();
}
