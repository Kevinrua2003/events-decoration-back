import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, EmployeeRole } from './entities/employee.entity';

const employees: Employee[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-0100',
    role: EmployeeRole.CEO,
    username: 'johndoe',
    password: 'pass123'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '555-0101',
    role: EmployeeRole.HR_MANAGER,
    username: 'janesmith',
    password: 'pass123'
  },
  {
    id: 3,
    firstName: '',
    lastName: 'Garcia',
    email: 'carlos.garcia@example.com',
    phone: '555-0102',
    role: EmployeeRole.ACCOUNTING_MANAGER,
    username: 'carlosg',
    password: 'pass123'
  },
  {
    id: 4,
    firstName: 'Lisa',
    lastName: 'Brown',
    email: 'lisa.brown@example.com',
    phone: '555-0103',
    role: EmployeeRole.UNION_SECRETARY,
    username: 'lisabrown',
    password: 'pass123'
  },
  {
    id: 5,
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@example.com',
    phone: '555-0104',
    role: EmployeeRole.STAFF,
    username: 'michaelj',
    password: 'pass123'
  },
];

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employee.create({
      data: createEmployeeDto,
    });
  }

  findAll() {
    return this.prisma.employee.findMany();
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({
      where: { id },
    });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.prisma.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  remove(id: number) {
    return this.prisma.employee.delete({
      where: { id },
    });
  }
}
