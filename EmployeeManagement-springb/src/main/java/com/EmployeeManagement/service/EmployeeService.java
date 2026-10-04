package com.EmployeeManagement.service;

import com.EmployeeManagement.entity.Employee;
import com.EmployeeManagement.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public Employee updateEmployee(Employee employee, Long id) {
        Employee employee1 = employeeRepository.findById(id).orElse(null);
        if(employee1 != null) {
            employee1.setFirstName(employee.getFirstName());
            employee1.setLastName(employee.getLastName());
            employee1.setEmailId(employee.getEmailId());

            Employee updatedEmployee = employeeRepository.save(employee1);

            return updatedEmployee;
        } else {
            return null;
        }
    }

    public Void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
        return null;
    }



}
