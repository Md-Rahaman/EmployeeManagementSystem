package com.gl.ems.mapper;

import com.gl.ems.dto.DepartmentDto;
import com.gl.ems.entity.Department;

public class DepartmentMapper {
	
	public static DepartmentDto mapToDepartmentDto(Department department) {
		return new DepartmentDto(department.getDeptId(), department.getDeptName(), department.getDeptDescription());
	}
	
	public static Department mapToDepartment(DepartmentDto departmentDto) {
		return new Department(departmentDto.getDeptId(), departmentDto.getDeptName(), departmentDto.getDeptDescription());
	}
}
