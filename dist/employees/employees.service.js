"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const employee_entity_1 = require("./entities/employee.entity");
const employees = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '555-0100',
        role: employee_entity_1.EmployeeRole.CEO,
        username: 'johndoe',
        password: 'pass123'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phone: '555-0101',
        role: employee_entity_1.EmployeeRole.HR_MANAGER,
        username: 'janesmith',
        password: 'pass123'
    },
    {
        id: 3,
        firstName: '',
        lastName: 'Garcia',
        email: 'carlos.garcia@example.com',
        phone: '555-0102',
        role: employee_entity_1.EmployeeRole.ACCOUNTING_MANAGER,
        username: 'carlosg',
        password: 'pass123'
    },
    {
        id: 4,
        firstName: 'Lisa',
        lastName: 'Brown',
        email: 'lisa.brown@example.com',
        phone: '555-0103',
        role: employee_entity_1.EmployeeRole.UNION_SECRETARY,
        username: 'lisabrown',
        password: 'pass123'
    },
    {
        id: 5,
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael.johnson@example.com',
        phone: '555-0104',
        role: employee_entity_1.EmployeeRole.STAFF,
        username: 'michaelj',
        password: 'pass123'
    },
];
let EmployeesService = class EmployeesService {
    create(createEmployeeDto) {
        const newId = employees.length ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;
        const newEmployee = { id: newId, ...createEmployeeDto };
        employees.push(newEmployee);
        return newEmployee;
    }
    findAll() {
        return employees;
    }
    findOne(id) {
        return employees.find(emp => emp.id === id) || null;
    }
    update(id, updateEmployeeDto) {
        const employee = employees.find(emp => emp.id === id);
        if (!employee)
            return null;
        Object.assign(employee, updateEmployeeDto);
        return employee;
    }
    remove(id) {
        const index = employees.findIndex(emp => emp.id === id);
        if (index === -1)
            return null;
        const removedEmployee = employees.splice(index, 1)[0];
        return removedEmployee;
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)()
], EmployeesService);
//# sourceMappingURL=employees.service.js.map