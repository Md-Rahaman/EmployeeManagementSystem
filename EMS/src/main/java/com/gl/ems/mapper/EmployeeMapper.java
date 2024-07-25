package com.gl.ems.mapper;

import com.gl.ems.dto.EmployeeDto;
import com.gl.ems.entity.Employee;

public class EmployeeMapper {
	
	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return new EmployeeDto(employee.getEmployeeId(), employee.getFirstName(),employee.getLastName(), employee.getEmail(), employee.getDepartment().getDeptId());
	}
	
	public static Employee mapToEmployee(EmployeeDto employeeDto) {
		Employee employee=new Employee();
		employee.setEmployeeId(employeeDto.getEmployeeId());
		employee.setFirstName(employeeDto.getFirstName());
		employee.setLastName(employeeDto.getLastName());
		employee.setEmail(employeeDto.getEmail());
		
		return employee;
	}

}
