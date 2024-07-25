package com.gl.ems.service;

import java.util.List;

import com.gl.ems.dto.DepartmentDto;

public interface DepartmentService {

	DepartmentDto createDepartment(DepartmentDto departmentDto);
	DepartmentDto getDepartmentById( int deptId);
	DepartmentDto updateDepartmentById(int deptId,DepartmentDto departmentDto);
	void deleteDepartmentById(int deptId);
	List<DepartmentDto> getAllDepartments();

}
