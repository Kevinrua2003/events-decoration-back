import { EmployeeRole } from "../entities/employee.entity"

export class CreateEmployeeDto {      
        firstName: string
        lastName: string
        email: string 
        phone: string
        role: EmployeeRole
        username: string
        password: string
}
