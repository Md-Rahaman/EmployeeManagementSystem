package com.gl.ems.serviceImpl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.gl.ems.dto.EmployeeDto;
import com.gl.ems.entity.Department;
import com.gl.ems.entity.Employee;
import com.gl.ems.exception.ResourceNotFoundException;
import com.gl.ems.mapper.EmployeeMapper;
import com.gl.ems.repository.DepartmentRepository;
import com.gl.ems.repository.EmployeeRepository;
import com.gl.ems.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	DepartmentRepository departmentRepository;
	
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee=EmployeeMapper.mapToEmployee(employeeDto);
		 Department department=departmentRepository.findById(employeeDto.getDepartmentId())
		.orElseThrow(()-> new ResourceNotFoundException("Department with Id "+employeeDto.getDepartmentId()+" Not Found"));
		employee.setDepartment(department);
		Employee savedEmployee=employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(int empId) {
		Employee existingEmployee=employeeRepository.findById(empId)
				.orElseThrow(()-> new ResourceNotFoundException("Employee With Id "+empId+" Not Found"));
		
		return EmployeeMapper.mapToEmployeeDto(existingEmployee);
	}

	@Override
	public EmployeeDto updateEmployeeById(int empId,EmployeeDto employeeDto) {
		Employee existingEmployee=employeeRepository.findById(empId)
				.orElseThrow(()->new ResourceNotFoundException("Employee With Id "+empId+" Not Found"));
		existingEmployee.setFirstName(employeeDto.getFirstName());
		existingEmployee.setLastName(employeeDto.getLastName());
		existingEmployee.setEmail(employeeDto.getEmail());
		Department department=departmentRepository.findById(employeeDto.getDepartmentId())
				.orElseThrow(()-> new ResourceNotFoundException("Department with Id "+employeeDto.getDepartmentId()+" Not Found"));
		existingEmployee.setDepartment(department);
		return EmployeeMapper.mapToEmployeeDto(existingEmployee);
	}

	@Override
	public void deleteEmployeeById(int empId) {
		Employee employee=employeeRepository.findById(empId)
				.orElseThrow(()->new ResourceNotFoundException("Employee With Id "+empId+" Not Found"));
		employeeRepository.delete(employee);
	}

	@GetMapping
	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employees=employeeRepository.findAll();
		return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());	
	}

	

}
