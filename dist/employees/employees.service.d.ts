import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
export declare class EmployeesService {
    create(createEmployeeDto: CreateEmployeeDto): Employee;
    findAll(): Employee[];
    findOne(id: number): Employee | null;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Employee | null;
    remove(id: number): Employee | null;
}
