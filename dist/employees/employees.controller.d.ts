import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): import("./entities/employee.entity").Employee;
    findAll(): import("./entities/employee.entity").Employee[];
    findOne(id: string): import("./entities/employee.entity").Employee | null;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): import("./entities/employee.entity").Employee | null;
    remove(id: string): import("./entities/employee.entity").Employee | null;
}
