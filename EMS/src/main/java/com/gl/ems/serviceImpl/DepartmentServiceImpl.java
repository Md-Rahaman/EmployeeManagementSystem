package com.gl.ems.serviceImpl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.ems.dto.DepartmentDto;
import com.gl.ems.entity.Department;
import com.gl.ems.exception.ResourceNotFoundException;
import com.gl.ems.mapper.DepartmentMapper;
import com.gl.ems.repository.DepartmentRepository;
import com.gl.ems.service.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService{

	@Autowired
	private DepartmentRepository departmentRepository;
	
	@Override
	public DepartmentDto createDepartment(DepartmentDto departmentDto) {
		Department department=DepartmentMapper.mapToDepartment(departmentDto);
		Department savedDepartment= departmentRepository.save(department);
		return DepartmentMapper.mapToDepartmentDto(savedDepartment);
	}

	@Override
	public DepartmentDto getDepartmentById(int deptId) {
		Department existingDepartment =departmentRepository.findById(deptId)
				.orElseThrow(()->new ResourceNotFoundException("Department With this Id "+deptId+" not Found"));
		return DepartmentMapper.mapToDepartmentDto(existingDepartment);
	}

	@Override
	public DepartmentDto updateDepartmentById(int deptId,DepartmentDto departmentDto) {
		Department department =departmentRepository.findById(deptId)
				.orElseThrow(()->new ResourceNotFoundException("Department With this Id "+deptId+" not Found"));
		department.setDeptName(departmentDto.getDeptName());
		department.setDeptDescription(departmentDto.getDeptDescription());
		departmentRepository.save(department);
		return DepartmentMapper.mapToDepartmentDto(department);
	}

	@Override
	public void deleteDepartmentById(int deptId) {
		Department existingDepartment =departmentRepository.findById(deptId)
				.orElseThrow(()->new ResourceNotFoundException("Department With this Id "+deptId+" not Found"));
		departmentRepository.delete(existingDepartment);
		
	}

	@Override
	public List<DepartmentDto> getAllDepartments() {
		List<Department> departments=departmentRepository.findAll();
		return departments.stream().map((department)->DepartmentMapper.mapToDepartmentDto(department)).collect(Collectors.toList());
	}

}
