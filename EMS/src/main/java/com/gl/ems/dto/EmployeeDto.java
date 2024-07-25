package com.gl.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
	
	private int employeeId;
	private String firstName;
	private String lastName;
	private String email;
	private int departmentId;
}
