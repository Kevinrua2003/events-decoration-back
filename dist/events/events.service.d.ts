import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma.service';
export declare class EventsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createEventDto: CreateEventDto): import("prisma/generated/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    findAll(): import("prisma/generated/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }[]>;
    findOne(id: number): import("prisma/generated/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    } | null, null, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    update(id: number, updateEventDto: UpdateEventDto): import("prisma/generated/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("prisma/generated/client").Prisma.Prisma__EventClient<{
        id: number;
        name: string;
        type: import("prisma/generated/client").$Enums.EventType;
        startDate: Date;
        endDate: Date;
        location: string;
        amount: number;
    }, never, import("prisma/generated/client/runtime/library").DefaultArgs, import("prisma/generated/client").Prisma.PrismaClientOptions>;
}
