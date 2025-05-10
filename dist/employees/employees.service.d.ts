import { PrismaService } from 'src/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createEmployeeDto: CreateEmployeeDto): import("@prisma/client").Prisma.Prisma__EmployeeClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("@prisma/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("@prisma/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__EmployeeClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("@prisma/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): import("@prisma/client").Prisma.Prisma__EmployeeClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("@prisma/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__EmployeeClient<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        role: import("@prisma/client").$Enums.EmployeeRole;
        username: string;
        password: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
