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
import com.gl.ems.service.DepartmentService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
	
	@Autowired
	DepartmentService departmentService;
	
	@PostMapping
	ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto){
		DepartmentDto department=departmentService.createDepartment(departmentDto);
		return new ResponseEntity<DepartmentDto>(department,HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") int departmentId){
		DepartmentDto department = departmentService.getDepartmentById(departmentId);
		return new ResponseEntity<DepartmentDto>(department,HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	ResponseEntity<DepartmentDto> updateDepartmentById(@PathVariable("id") int deptId,@RequestBody DepartmentDto  departmentDto)
	{
		DepartmentDto department=departmentService.updateDepartmentById(deptId, departmentDto);
		return new ResponseEntity<DepartmentDto>(department,HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	ResponseEntity<DepartmentDto> deleteDepartmentById(@PathVariable("id") int deptId){
		departmentService.deleteDepartmentById(deptId);
		
		return new ResponseEntity("Department deleted succesfully.",HttpStatus.OK);
	}
	
	@GetMapping
	ResponseEntity<List<DepartmentDto>> getAllDepartments(){
		List<DepartmentDto> departments=departmentService.getAllDepartments();
		return new ResponseEntity<List<DepartmentDto>>(departments,HttpStatus.OK);
	}
}
