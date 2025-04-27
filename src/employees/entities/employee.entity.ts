export enum EmployeeRole {
    CEO = 'CEO',
    HR_MANAGER = 'HR_MANAGER',
    ACCOUNTING_MANAGER = 'ACCOUNTING_MANAGER',
    UNION_SECRETARY = 'UNION_SECRETARY',
    STAFF = 'STAFF',
  }

export class Employee {
    id: number        
    firstName: string
    lastName: string
    email: string 
    phone: string
    role: EmployeeRole
    username: string
    password: string
}
