import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): import("prisma/generated/client").Prisma.Prisma__EmployeeClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("prisma/generated/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("prisma/generated/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    }[]>;
    findOne(id: string): import("prisma/generated/client").Prisma.Prisma__EmployeeClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("prisma/generated/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): import("prisma/generated/client").Prisma.Prisma__EmployeeClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("prisma/generated/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("prisma/generated/client").Prisma.Prisma__EmployeeClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("prisma/generated/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
